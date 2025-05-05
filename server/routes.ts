import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth } from "./auth";
import multer from "multer";
import { insertCarSchema, insertNewsletterSchema } from "@shared/schema";
import { z } from "zod";

// Configure multer for image upload
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  fileFilter: (_req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/webp"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // sets up /api/register, /api/login, /api/logout, /api/user
  setupAuth(app);

  // Car routes
  app.get("/api/cars/featured", async (_req, res) => {
    try {
      const featuredCars = await storage.getFeaturedCars();
      res.json(featuredCars);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/cars", async (req, res) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 16;
      const filters = req.query;
      
      const { cars, total } = await storage.searchCars(filters, page, limit);
      res.json({ cars, total });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/cars/search", async (req, res) => {
    try {
      const query = req.query.q as string;
      if (!query || query.length < 3) {
        return res.json([]);
      }
      
      const cars = await storage.searchCarsByKeyword(query);
      res.json(cars);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/cars/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const car = await storage.getCar(id);
      
      if (!car) {
        return res.status(404).json({ message: "Car not found" });
      }
      
      res.json(car);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.post("/api/cars", upload.array("images", 10), async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "You must be logged in to post a car" });
      }

      // Handle the file uploads - in a real implementation, these would be stored in a cloud service
      const imageUrls = (req.files as Express.Multer.File[]).map(
        (file, index) => `https://via.placeholder.com/800x600?text=Car+Image+${index + 1}`
      );

      // Parse the features array if it exists
      let features = [];
      if (req.body.features) {
        try {
          features = JSON.parse(req.body.features);
        } catch {
          features = [];
        }
      }

      // Create car data object
      const carData = {
        ...req.body,
        sellerId: req.user!.id,
        price: parseInt(req.body.price) || 0,
        year: parseInt(req.body.year) || new Date().getFullYear(),
        mileage: parseInt(req.body.mileage) || 0,
        features,
        images: imageUrls,
      };

      // Validate car data
      const validatedData = insertCarSchema.parse(carData);
      
      // Create car
      const car = await storage.createCar(validatedData);
      res.status(201).json(car);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid car data", errors: error.errors });
      }
      res.status(500).json({ message: error.message });
    }
  });

  app.post("/api/cars/:id/boost", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "You must be logged in to boost a car" });
      }

      const carId = parseInt(req.params.id);
      const { days, budget } = req.body;
      
      if (!days || !budget) {
        return res.status(400).json({ message: "Days and budget are required" });
      }
      
      const car = await storage.getCar(carId);
      
      if (!car) {
        return res.status(404).json({ message: "Car not found" });
      }
      
      if (car.sellerId !== req.user!.id) {
        return res.status(403).json({ message: "You can only boost your own cars" });
      }
      
      const boost = await storage.boostCar(carId, req.user!.id, days, budget);
      res.json(boost);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.post("/api/cars/:id/renew", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "You must be logged in to renew a car" });
      }

      const carId = parseInt(req.params.id);
      
      const car = await storage.getCar(carId);
      
      if (!car) {
        return res.status(404).json({ message: "Car not found" });
      }
      
      if (car.sellerId !== req.user!.id) {
        return res.status(403).json({ message: "You can only renew your own cars" });
      }
      
      const renewed = await storage.renewCar(carId);
      res.json(renewed);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.delete("/api/cars/:id", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "You must be logged in to delete a car" });
      }

      const carId = parseInt(req.params.id);
      
      const car = await storage.getCar(carId);
      
      if (!car) {
        return res.status(404).json({ message: "Car not found" });
      }
      
      if (car.sellerId !== req.user!.id) {
        return res.status(403).json({ message: "You can only delete your own cars" });
      }
      
      await storage.deleteCar(carId);
      res.json({ message: "Car deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  // User cars route
  app.get("/api/user/cars", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "You must be logged in to view your cars" });
      }

      const userCars = await storage.getUserCars(req.user!.id);
      res.json(userCars);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
      
      const validated = insertNewsletterSchema.parse({ email });
      const subscription = await storage.subscribeToNewsletter(validated);
      
      res.status(201).json(subscription);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid email", errors: error.errors });
      }
      res.status(500).json({ message: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
