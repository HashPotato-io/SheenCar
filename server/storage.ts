import { 
  users, 
  type User, 
  type InsertUser, 
  type Car, 
  type InsertCar,
  type Boost,
  type Newsletter,
  type InsertNewsletter
} from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

// Sample luxury car images
const luxuryCarImages = [
  "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1619767886558-efdc7e9e5461?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
];

// Sample car dealership images
const dealershipImages = [
  "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
];

// Sample car comparison images
const comparisonImages = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
];

// Generate sample car data
function generateSampleCars(count: number): Car[] {
  const cars: Car[] = [];
  const makes = ["Toyota", "Honda", "Ford", "BMW", "Mercedes", "Audi", "Porsche"];
  const models = ["Camry", "Civic", "F-150", "3 Series", "C-Class", "A4", "911"];
  const colors = ["Black", "White", "Silver", "Red", "Blue"];
  const fuelTypes = ["Gasoline", "Diesel", "Hybrid", "Electric"];
  const transmissions = ["Automatic", "Manual", "CVT"];
  const bodyTypes = ["Sedan", "SUV", "Truck", "Coupe", "Convertible"];
  const conditions = ["New", "Used", "Certified Pre-Owned"];
  const features = [
    "Navigation System", "Bluetooth", "Backup Camera", "Leather Seats", 
    "Sunroof", "Heated Seats", "Keyless Entry", "Remote Start", "Lane Departure Warning",
    "Blind Spot Monitoring", "Parking Sensors", "Apple CarPlay", "Android Auto"
  ];
  
  for (let i = 1; i <= count; i++) {
    const makeIndex = Math.floor(Math.random() * makes.length);
    const modelIndex = Math.floor(Math.random() * models.length);
    const price = Math.floor(Math.random() * 50000) + 20000;
    const year = Math.floor(Math.random() * 10) + 2013;
    const mileage = Math.floor(Math.random() * 100000);
    
    const car: Car = {
      id: i,
      sellerId: 1,
      title: `${year} ${makes[makeIndex]} ${models[modelIndex]}`,
      description: `This is a beautiful ${year} ${makes[makeIndex]} ${models[modelIndex]} in excellent condition. Low mileage, clean title, and well-maintained. Features include navigation, leather seats, and much more.`,
      price,
      year,
      make: makes[makeIndex],
      model: models[modelIndex],
      trim: "Base",
      bodyType: bodyTypes[Math.floor(Math.random() * bodyTypes.length)],
      mileage,
      exteriorColor: colors[Math.floor(Math.random() * colors.length)],
      interiorColor: colors[Math.floor(Math.random() * colors.length)],
      fuelType: fuelTypes[Math.floor(Math.random() * fuelTypes.length)],
      transmission: transmissions[Math.floor(Math.random() * transmissions.length)],
      drivetrain: ["FWD", "RWD", "AWD", "4WD"][Math.floor(Math.random() * 4)],
      engine: `${Math.floor(Math.random() * 3) + 2}.${Math.floor(Math.random() * 9)}L ${Math.floor(Math.random() * 6) + 4}-Cylinder`,
      vin: `SAMPLE${i}VIN${Math.floor(Math.random() * 100000)}`,
      condition: conditions[Math.floor(Math.random() * conditions.length)],
      features: Array.from({ length: Math.floor(Math.random() * 8) + 3 }, () => features[Math.floor(Math.random() * features.length)]),
      sellerType: Math.random() > 0.5 ? "Private Seller" : "Dealer",
      location: "Los Angeles, CA",
      images: [luxuryCarImages[Math.floor(Math.random() * luxuryCarImages.length)]],
      boosted: Math.random() > 0.8,
      boostExpiration: new Date(Date.now() + Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)),
      featured: Math.random() > 0.8,
      status: "active",
      createdAt: new Date(),
      updatedAt: new Date(),
      mpgCity: Math.floor(Math.random() * 15) + 15,
      mpgHighway: Math.floor(Math.random() * 15) + 25,
      needsRenewal: Math.random() > 0.8,
    };
    
    cars.push(car);
  }
  
  return cars;
}

export interface IStorage {
  sessionStore: session.SessionStore;
  
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Car methods
  getCar(id: number): Promise<Car | undefined>;
  createCar(car: InsertCar): Promise<Car>;
  updateCar(id: number, car: Partial<Car>): Promise<Car | undefined>;
  deleteCar(id: number): Promise<void>;
  getFeaturedCars(): Promise<Car[]>;
  searchCars(filters: any, page: number, limit: number): Promise<{ cars: Car[], total: number }>;
  searchCarsByKeyword(query: string): Promise<Car[]>;
  getUserCars(userId: number): Promise<{ active: Car[], pending: Car[], requests: Car[] }>;
  
  // Boost methods
  boostCar(carId: number, userId: number, days: number, budget: number): Promise<Boost>;
  renewCar(carId: number): Promise<Car>;
  
  // Newsletter methods
  subscribeToNewsletter(data: InsertNewsletter): Promise<Newsletter>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private cars: Map<number, Car>;
  private boosts: Map<number, Boost>;
  private newsletters: Map<number, Newsletter>;
  currentUserId: number;
  currentCarId: number;
  currentBoostId: number;
  currentNewsletterId: number;
  sessionStore: session.SessionStore;

  constructor() {
    this.users = new Map();
    this.cars = new Map();
    this.boosts = new Map();
    this.newsletters = new Map();
    this.currentUserId = 1;
    this.currentCarId = 1;
    this.currentBoostId = 1;
    this.currentNewsletterId = 1;
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000,
    });

    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Add a sample user
    this.users.set(1, {
      id: 1,
      username: "demo",
      password: "password",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      phoneNumber: "1234567890",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      createdAt: new Date(),
    });

    // Add sample cars
    const sampleCars = generateSampleCars(30);
    sampleCars.forEach(car => {
      this.cars.set(car.id, car);
      this.currentCarId = Math.max(this.currentCarId, car.id + 1);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser, 
      id,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      avatar: "",
      createdAt: new Date()
    };
    this.users.set(id, user);
    return user;
  }

  // Car methods
  async getCar(id: number): Promise<Car | undefined> {
    return this.cars.get(id);
  }

  async createCar(insertCar: InsertCar): Promise<Car> {
    const id = this.currentCarId++;
    const car: Car = {
      ...insertCar,
      id,
      boosted: false,
      boostExpiration: undefined,
      featured: false,
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
      needsRenewal: false,
      mpgCity: 0,
      mpgHighway: 0,
    };
    
    this.cars.set(id, car);
    return car;
  }

  async updateCar(id: number, updates: Partial<Car>): Promise<Car | undefined> {
    const car = this.cars.get(id);
    if (!car) return undefined;
    
    const updatedCar = { ...car, ...updates, updatedAt: new Date() };
    this.cars.set(id, updatedCar);
    return updatedCar;
  }

  async deleteCar(id: number): Promise<void> {
    this.cars.delete(id);
  }

  async getFeaturedCars(): Promise<Car[]> {
    return Array.from(this.cars.values())
      .filter(car => car.featured || car.boosted)
      .slice(0, 8);
  }

  async searchCars(filters: any, page: number, limit: number): Promise<{ cars: Car[], total: number }> {
    let cars = Array.from(this.cars.values()).filter(car => car.status === "active");
    
    // Apply filters
    if (filters.make) {
      cars = cars.filter(car => car.make.toLowerCase() === filters.make.toLowerCase());
    }
    
    if (filters.model) {
      cars = cars.filter(car => car.model.toLowerCase() === filters.model.toLowerCase());
    }
    
    if (filters.minPrice && filters.maxPrice) {
      const minPrice = parseInt(filters.minPrice);
      const maxPrice = parseInt(filters.maxPrice);
      cars = cars.filter(car => car.price >= minPrice && car.price <= maxPrice);
    }
    
    if (filters.minYear && filters.maxYear) {
      const minYear = parseInt(filters.minYear);
      const maxYear = parseInt(filters.maxYear);
      cars = cars.filter(car => car.year >= minYear && car.year <= maxYear);
    }
    
    if (filters.minMileage && filters.maxMileage) {
      const minMileage = parseInt(filters.minMileage);
      const maxMileage = parseInt(filters.maxMileage);
      cars = cars.filter(car => car.mileage >= minMileage && car.mileage <= maxMileage);
    }
    
    if (filters.dealer === "true" && filters.private !== "true") {
      cars = cars.filter(car => car.sellerType === "Dealer");
    } else if (filters.private === "true" && filters.dealer !== "true") {
      cars = cars.filter(car => car.sellerType === "Private Seller");
    }
    
    if (filters.used === "true" && filters.new !== "true") {
      cars = cars.filter(car => car.condition === "Used" || car.condition === "Certified Pre-Owned");
    } else if (filters.new === "true" && filters.used !== "true") {
      cars = cars.filter(car => car.condition === "New");
    }
    
    if (filters.type) {
      cars = cars.filter(car => car.bodyType.toLowerCase() === filters.type.toLowerCase());
    }
    
    if (filters.zipCode) {
      // In a real app, this would filter by proximity to the ZIP code
      // For this example, we'll just simulate it
      cars = cars.sort(() => Math.random() - 0.5);
    }
    
    if (filters.q) {
      const query = filters.q.toLowerCase();
      cars = cars.filter(car => 
        car.title.toLowerCase().includes(query) ||
        car.description?.toLowerCase().includes(query) ||
        car.make.toLowerCase().includes(query) ||
        car.model.toLowerCase().includes(query)
      );
    }
    
    const total = cars.length;
    
    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    cars = cars.slice(startIndex, endIndex);
    
    return { cars, total };
  }

  async searchCarsByKeyword(query: string): Promise<Car[]> {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.cars.values())
      .filter(car => 
        car.status === "active" && (
          car.make.toLowerCase().includes(lowerQuery) ||
          car.model.toLowerCase().includes(lowerQuery) ||
          car.title.toLowerCase().includes(lowerQuery) ||
          car.year.toString().includes(lowerQuery)
        )
      )
      .slice(0, 10);
  }

  async getUserCars(userId: number): Promise<{ active: Car[], pending: Car[], requests: Car[] }> {
    const allUserCars = Array.from(this.cars.values()).filter(car => car.sellerId === userId);
    
    const active = allUserCars.filter(car => car.status === "active");
    const pending = allUserCars.filter(car => car.status === "pending");
    const requests = []; // In a real app, this would include trade requests or similar
    
    return { active, pending, requests };
  }

  // Boost methods
  async boostCar(carId: number, userId: number, days: number, budget: number): Promise<Boost> {
    const car = this.cars.get(carId);
    if (!car) {
      throw new Error("Car not found");
    }
    
    const boostId = this.currentBoostId++;
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + days);
    
    const boost: Boost = {
      id: boostId,
      carId,
      userId,
      days,
      budget,
      startDate,
      endDate,
      active: true,
      createdAt: new Date(),
    };
    
    this.boosts.set(boostId, boost);
    
    // Update the car
    await this.updateCar(carId, {
      boosted: true,
      boostExpiration: endDate,
    });
    
    return boost;
  }

  async renewCar(carId: number): Promise<Car> {
    const car = this.cars.get(carId);
    if (!car) {
      throw new Error("Car not found");
    }
    
    const updatedCar = await this.updateCar(carId, {
      needsRenewal: false,
      updatedAt: new Date(),
    });
    
    if (!updatedCar) {
      throw new Error("Failed to update car");
    }
    
    return updatedCar;
  }

  // Newsletter methods
  async subscribeToNewsletter(data: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existing = Array.from(this.newsletters.values()).find(
      newsletter => newsletter.email === data.email
    );
    
    if (existing) {
      return existing;
    }
    
    const id = this.currentNewsletterId++;
    const newsletter: Newsletter = {
      ...data,
      id,
      active: true,
      createdAt: new Date(),
    };
    
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
}

export const storage = new MemStorage();
