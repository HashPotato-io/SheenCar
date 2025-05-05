import { Car as CarIcon, Truck, Rocket, TrendingUp, Droplet, Wind } from "lucide-react";
import { FaCarSide, FaMotorcycle, FaTruckPickup, FaCarAlt } from "react-icons/fa";
import { RiTruckLine, RiMotorbikeLine } from "react-icons/ri";

export const carTypes = [
  {
    id: "sedan",
    name: "Sedan",
    icon: FaCarSide,
  },
  {
    id: "suv",
    name: "SUV",
    icon: CarIcon,
  },
  {
    id: "convertible",
    name: "Convertible",
    icon: Wind,
  },
  {
    id: "truck",
    name: "Truck",
    icon: FaTruckPickup,
  },
  {
    id: "luxury",
    name: "Luxury",
    icon: Rocket,
  },
  {
    id: "coupe",
    name: "Coupe",
    icon: FaCarAlt,
  },
  {
    id: "hatchback",
    name: "Hatchback",
    icon: CarIcon,
  },
  {
    id: "wagon",
    name: "Wagon",
    icon: RiTruckLine,
  },
  {
    id: "van",
    name: "Van",
    icon: Truck,
  },
  {
    id: "motorcycle",
    name: "Motorcycle",
    icon: RiMotorbikeLine,
  },
];

export const carMakes = [
  { id: "toyota", name: "Toyota" },
  { id: "honda", name: "Honda" },
  { id: "ford", name: "Ford" },
  { id: "chevrolet", name: "Chevrolet" },
  { id: "nissan", name: "Nissan" },
  { id: "bmw", name: "BMW" },
  { id: "mercedes", name: "Mercedes-Benz" },
  { id: "audi", name: "Audi" },
  { id: "lexus", name: "Lexus" },
  { id: "subaru", name: "Subaru" },
  { id: "kia", name: "Kia" },
  { id: "hyundai", name: "Hyundai" },
  { id: "volkswagen", name: "Volkswagen" },
  { id: "mazda", name: "Mazda" },
  { id: "porsche", name: "Porsche" },
  { id: "jeep", name: "Jeep" },
  { id: "tesla", name: "Tesla" },
  { id: "volvo", name: "Volvo" },
  { id: "acura", name: "Acura" },
  { id: "infiniti", name: "Infiniti" },
  { id: "cadillac", name: "Cadillac" },
  { id: "dodge", name: "Dodge" },
  { id: "gmc", name: "GMC" },
  { id: "ram", name: "RAM" },
  { id: "buick", name: "Buick" },
];

export const carModels = [
  // Toyota Models
  { id: "camry", name: "Camry", makeId: "toyota" },
  { id: "corolla", name: "Corolla", makeId: "toyota" },
  { id: "rav4", name: "RAV4", makeId: "toyota" },
  { id: "highlander", name: "Highlander", makeId: "toyota" },
  { id: "tacoma", name: "Tacoma", makeId: "toyota" },
  { id: "4runner", name: "4Runner", makeId: "toyota" },
  { id: "tundra", name: "Tundra", makeId: "toyota" },
  { id: "sienna", name: "Sienna", makeId: "toyota" },
  { id: "prius", name: "Prius", makeId: "toyota" },
  { id: "avalon", name: "Avalon", makeId: "toyota" },
  
  // Honda Models
  { id: "civic", name: "Civic", makeId: "honda" },
  { id: "accord", name: "Accord", makeId: "honda" },
  { id: "crv", name: "CR-V", makeId: "honda" },
  { id: "pilot", name: "Pilot", makeId: "honda" },
  { id: "odyssey", name: "Odyssey", makeId: "honda" },
  { id: "hrv", name: "HR-V", makeId: "honda" },
  { id: "ridgeline", name: "Ridgeline", makeId: "honda" },
  { id: "insight", name: "Insight", makeId: "honda" },
  { id: "passport", name: "Passport", makeId: "honda" },
  
  // Ford Models
  { id: "f150", name: "F-150", makeId: "ford" },
  { id: "escape", name: "Escape", makeId: "ford" },
  { id: "explorer", name: "Explorer", makeId: "ford" },
  { id: "edge", name: "Edge", makeId: "ford" },
  { id: "mustang", name: "Mustang", makeId: "ford" },
  { id: "bronco", name: "Bronco", makeId: "ford" },
  { id: "ranger", name: "Ranger", makeId: "ford" },
  { id: "expedition", name: "Expedition", makeId: "ford" },
  { id: "fusion", name: "Fusion", makeId: "ford" },
  
  // Chevrolet Models
  { id: "silverado", name: "Silverado", makeId: "chevrolet" },
  { id: "equinox", name: "Equinox", makeId: "chevrolet" },
  { id: "tahoe", name: "Tahoe", makeId: "chevrolet" },
  { id: "traverse", name: "Traverse", makeId: "chevrolet" },
  { id: "malibu", name: "Malibu", makeId: "chevrolet" },
  { id: "suburban", name: "Suburban", makeId: "chevrolet" },
  { id: "colorado", name: "Colorado", makeId: "chevrolet" },
  { id: "blazer", name: "Blazer", makeId: "chevrolet" },
  { id: "camaro", name: "Camaro", makeId: "chevrolet" },
  { id: "corvette", name: "Corvette", makeId: "chevrolet" },
  
  // BMW Models
  { id: "3series", name: "3 Series", makeId: "bmw" },
  { id: "5series", name: "5 Series", makeId: "bmw" },
  { id: "x3", name: "X3", makeId: "bmw" },
  { id: "x5", name: "X5", makeId: "bmw" },
  { id: "x7", name: "X7", makeId: "bmw" },
  { id: "7series", name: "7 Series", makeId: "bmw" },
  { id: "m3", name: "M3", makeId: "bmw" },
  { id: "m5", name: "M5", makeId: "bmw" },
  { id: "i4", name: "i4", makeId: "bmw" },
  
  // Mercedes-Benz Models
  { id: "cclass", name: "C-Class", makeId: "mercedes" },
  { id: "eclass", name: "E-Class", makeId: "mercedes" },
  { id: "sclass", name: "S-Class", makeId: "mercedes" },
  { id: "glc", name: "GLC", makeId: "mercedes" },
  { id: "gle", name: "GLE", makeId: "mercedes" },
  { id: "gls", name: "GLS", makeId: "mercedes" },
  { id: "cla", name: "CLA", makeId: "mercedes" },
  { id: "amggt", name: "AMG GT", makeId: "mercedes" },
  { id: "gla", name: "GLA", makeId: "mercedes" },
  
  // Audi Models
  { id: "a4", name: "A4", makeId: "audi" },
  { id: "a6", name: "A6", makeId: "audi" },
  { id: "q5", name: "Q5", makeId: "audi" },
  { id: "q7", name: "Q7", makeId: "audi" },
  { id: "a3", name: "A3", makeId: "audi" },
  { id: "q3", name: "Q3", makeId: "audi" },
  { id: "a8", name: "A8", makeId: "audi" },
  { id: "q8", name: "Q8", makeId: "audi" },
  { id: "rs7", name: "RS7", makeId: "audi" },
  
  // Porsche Models
  { id: "911", name: "911", makeId: "porsche" },
  { id: "cayenne", name: "Cayenne", makeId: "porsche" },
  { id: "macan", name: "Macan", makeId: "porsche" },
  { id: "panamera", name: "Panamera", makeId: "porsche" },
  { id: "taycan", name: "Taycan", makeId: "porsche" },
  { id: "718", name: "718", makeId: "porsche" },
];
