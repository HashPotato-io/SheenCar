import { pgTable, text, serial, integer, boolean, jsonb, timestamp, doublePrecision } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email"),
  phoneNumber: text("phone_number"),
  avatar: text("avatar"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const cars = pgTable("cars", {
  id: serial("id").primaryKey(),
  sellerId: integer("seller_id").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  price: integer("price").notNull(),
  year: integer("year").notNull(),
  make: text("make").notNull(),
  model: text("model").notNull(),
  trim: text("trim"),
  bodyType: text("body_type"),
  mileage: integer("mileage").default(0),
  exteriorColor: text("exterior_color"),
  interiorColor: text("interior_color"),
  fuelType: text("fuel_type"),
  transmission: text("transmission"),
  drivetrain: text("drivetrain"),
  engine: text("engine"),
  vin: text("vin"),
  condition: text("condition").default("Used"),
  features: jsonb("features").default([]),
  sellerType: text("seller_type"),
  location: text("location"),
  images: jsonb("images").default([]),
  boosted: boolean("boosted").default(false),
  boostExpiration: timestamp("boost_expiration"),
  featured: boolean("featured").default(false),
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  mpgCity: integer("mpg_city"),
  mpgHighway: integer("mpg_highway"),
  needsRenewal: boolean("needs_renewal").default(false),
});

export const insertCarSchema = createInsertSchema(cars).omit({
  id: true,
  boosted: true,
  boostExpiration: true,
  featured: true,
  status: true,
  createdAt: true,
  updatedAt: true,
  needsRenewal: true,
});

export type InsertCar = z.infer<typeof insertCarSchema>;
export type Car = typeof cars.$inferSelect;

export const boosts = pgTable("boosts", {
  id: serial("id").primaryKey(),
  carId: integer("car_id").notNull(),
  userId: integer("user_id").notNull(),
  days: integer("days").notNull(),
  budget: integer("budget").notNull(),
  startDate: timestamp("start_date").defaultNow(),
  endDate: timestamp("end_date").notNull(),
  active: boolean("active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertBoostSchema = createInsertSchema(boosts).omit({
  id: true,
  startDate: true,
  active: true,
  createdAt: true,
});

export type InsertBoost = z.infer<typeof insertBoostSchema>;
export type Boost = typeof boosts.$inferSelect;

export const savedCars = pgTable("saved_cars", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  carId: integer("car_id").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertSavedCarSchema = createInsertSchema(savedCars).omit({
  id: true,
  createdAt: true,
});

export type InsertSavedCar = z.infer<typeof insertSavedCarSchema>;
export type SavedCar = typeof savedCars.$inferSelect;

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  senderId: integer("sender_id").notNull(),
  receiverId: integer("receiver_id").notNull(),
  carId: integer("car_id").notNull(),
  content: text("content").notNull(),
  read: boolean("read").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertMessageSchema = createInsertSchema(messages).omit({
  id: true,
  read: true,
  createdAt: true,
});

export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;

export const offers = pgTable("offers", {
  id: serial("id").primaryKey(),
  buyerId: integer("buyer_id").notNull(),
  sellerId: integer("seller_id").notNull(),
  carId: integer("car_id").notNull(),
  amount: integer("amount").notNull(),
  status: text("status").default("pending"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertOfferSchema = createInsertSchema(offers).omit({
  id: true,
  status: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertOffer = z.infer<typeof insertOfferSchema>;
export type Offer = typeof offers.$inferSelect;

export const newsletters = pgTable("newsletters", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  active: boolean("active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertNewsletterSchema = createInsertSchema(newsletters).omit({
  id: true,
  active: true,
  createdAt: true,
});

export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = typeof newsletters.$inferSelect;
