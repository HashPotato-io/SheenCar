// Using a more flexible car type for our dummy data that includes additional fields for comparison
export interface DummyCar {
  id: number;
  sellerId: number;
  title: string;
  description?: string;
  make: string;
  model: string;
  year: number;
  trim?: string;
  mileage: number;
  price: number;
  bodyType?: string;
  condition: string;
  exteriorColor?: string;
  interiorColor?: string;
  fuelType?: string;
  transmission?: string;
  drivetrain?: string;
  engine?: string;
  mpgCity?: number;
  mpgHighway?: number;
  features: string[];
  images: string[];
  location?: string;
  sellerType?: string;
  vin?: string;
  status: string;
  boosted?: boolean;
  featured?: boolean;
  // Additional fields for comparison
  specifications?: {
    mpg?: string;
    horsepower?: string;
    torque?: string;
    acceleration?: string;
    engineType?: string;
    weight?: string;
    dimensions?: string;
    range?: string; // For electric vehicles
  }
}

export const dummyCars: DummyCar[] = [
  {
    id: 101,
    sellerId: 1,
    title: "Toyota Corolla Altis",
    description: "The 2023 Toyota Corolla comes with a comfortable ride, user-friendly features, and Toyota's reliability record.",
    make: "toyota",
    model: "corolla",
    year: 2023,
    mileage: 15000,
    price: 22000,
    condition: "used",
    exteriorColor: "Black",
    interiorColor: "Beige",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "Sedan",
    drivetrain: "FWD",
    engine: "1.8L",
    features: ["Bluetooth", "Backup Camera", "Keyless Entry", "Lane Departure Warning", "Adaptive Cruise Control"],
    images: ["/car-images/toyota-corolla-black.svg"],
    location: "New York, NY",
    sellerType: "dealer",
    vin: "1HGBH41JXMN109186",
    status: "active",
    mpgCity: 31,
    mpgHighway: 40,
    boosted: false,
    featured: true,
    trim: "Altis",
    specifications: {
      mpg: "31 city / 40 hwy",
      horsepower: "169 hp",
      torque: "151 lb-ft",
      acceleration: "8.5 sec 0-60 mph",
      engineType: "4-cylinder",
      weight: "2910 lbs",
      dimensions: "182.3\" L x 70.1\" W x 56.5\" H"
    }
  },
  {
    id: 102,
    sellerId: 2,
    title: "Honda Civic LX",
    description: "The 2023 Honda Civic offers excellent fuel economy, agile handling, and Honda's reputation for reliability.",
    make: "honda",
    model: "civic",
    year: 2023,
    mileage: 12500,
    price: 24500,
    condition: "used",
    exteriorColor: "Blue",
    interiorColor: "Gray",
    fuelType: "Gasoline",
    transmission: "CVT",
    bodyType: "Sedan",
    drivetrain: "FWD",
    engine: "2.0L",
    features: ["Apple CarPlay", "Android Auto", "Honda Sensing", "Adaptive Cruise Control", "Lane Keeping Assist"],
    images: ["/car-images/honda-civic-blue.svg"],
    location: "Los Angeles, CA",
    sellerType: "dealer",
    vin: "2HGFC2F54MH123456",
    status: "active",
    mpgCity: 33,
    mpgHighway: 42,
    boosted: true,
    featured: false,
    trim: "LX",
    specifications: {
      mpg: "33 city / 42 hwy",
      horsepower: "158 hp",
      torque: "138 lb-ft",
      acceleration: "7.9 sec 0-60 mph",
      engineType: "4-cylinder",
      weight: "2877 lbs",
      dimensions: "184.0\" L x 70.9\" W x 55.7\" H"
    }
  },
  {
    id: 103,
    sellerId: 3,
    title: "BMW 3 Series 330i",
    description: "The 2023 BMW 3 Series offers a perfect blend of luxury, performance, and technology.",
    make: "bmw",
    model: "3series",
    year: 2023,
    mileage: 8000,
    price: 45000,
    condition: "used",
    exteriorColor: "Black",
    interiorColor: "Black",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "Sedan",
    drivetrain: "RWD",
    engineSize: "2.0L",
    features: ["BMW iDrive", "Navigation", "Heated Seats", "Sunroof", "Premium Sound System", "Leather Seats"],
    images: ["/car-images/bmw-3series-black.jpg"],
    location: "Chicago, IL",
    sellerType: "dealer",
    vin: "WBA5A5C54ED123456",
    status: "active",
    views: 427,
    createdAt: new Date("2023-05-20").toISOString(),
    expiresAt: new Date("2023-08-20").toISOString(),
    isPremium: true,
    isFeatured: true,
    specifications: {
      mpg: "26 city / 36 hwy",
      horsepower: "255 hp",
      torque: "295 lb-ft",
      acceleration: "5.6 sec 0-60 mph",
      engineType: "4-cylinder Turbo",
      weight: "3582 lbs",
      dimensions: "185.7\" L x 71.9\" W x 56.8\" H"
    }
  },
  {
    id: 104,
    sellerId: 4,
    title: "Tesla Model 3",
    description: "The 2023 Tesla Model 3 offers impressive range, cutting-edge technology, and exceptional performance.",
    make: "tesla",
    model: "model3",
    year: 2023,
    mileage: 5500,
    price: 48900,
    condition: "used",
    exteriorColor: "White",
    interiorColor: "Black",
    fuelType: "Electric",
    transmission: "Automatic",
    bodyType: "Sedan",
    drivetrain: "AWD",
    engineSize: "Electric",
    features: ["Autopilot", "Glass Roof", "Touchscreen Display", "Supercharging Capability", "Over-the-air Updates"],
    images: ["/car-images/tesla-model3-white.jpg"],
    location: "San Francisco, CA",
    sellerType: "dealer",
    vin: "5YJ3E1EA1JF123456",
    status: "active",
    views: 589,
    createdAt: new Date("2023-04-15").toISOString(),
    expiresAt: new Date("2023-07-15").toISOString(),
    isPremium: true,
    isFeatured: true,
    specifications: {
      mpg: "138 city / 126 hwy MPGe",
      horsepower: "283 hp",
      torque: "330 lb-ft",
      acceleration: "5.3 sec 0-60 mph",
      engineType: "Electric Motor",
      weight: "3627 lbs",
      dimensions: "184.8\" L x 72.8\" W x 56.8\" H",
      range: "358 miles (EPA est.)"
    }
  },
  {
    id: 105,
    sellerId: 5,
    title: "Ford Mustang GT",
    description: "The 2023 Ford Mustang GT offers thrilling performance, iconic styling, and a visceral driving experience.",
    make: "ford",
    model: "mustang",
    year: 2023,
    mileage: 9800,
    price: 42500,
    condition: "used",
    exteriorColor: "Red",
    interiorColor: "Black",
    fuelType: "Gasoline",
    transmission: "Manual",
    bodyType: "Coupe",
    driveType: "RWD",
    engineSize: "5.0L V8",
    features: ["SYNC 4", "Digital Instrument Cluster", "Performance Package", "Brembo Brakes", "Launch Control"],
    images: ["/car-images/ford-mustang-red.jpg"],
    location: "Miami, FL",
    sellerType: "dealer",
    vin: "1FA6P8CF5M5123456",
    status: "active",
    views: 390,
    createdAt: new Date("2023-06-05").toISOString(),
    expiresAt: new Date("2023-09-05").toISOString(),
    isPremium: false,
    isFeatured: true,
    specifications: {
      mpg: "15 city / 24 hwy",
      horsepower: "450 hp",
      torque: "410 lb-ft",
      acceleration: "4.2 sec 0-60 mph",
      engineType: "V8",
      weight: "3730 lbs",
      dimensions: "188.5\" L x 75.4\" W x 54.3\" H"
    }
  },
  {
    id: 106,
    sellerId: 1,
    title: "Toyota Camry XSE",
    description: "The 2023 Toyota Camry offers a spacious cabin, comfortable ride, and excellent fuel economy.",
    make: "toyota",
    model: "camry",
    year: 2023,
    mileage: 16300,
    price: 28900,
    condition: "used",
    exteriorColor: "Silver",
    interiorColor: "Black",
    fuelType: "Gasoline",
    transmission: "Automatic",
    bodyType: "Sedan",
    drivetrain: "FWD",
    engineSize: "2.5L 4-cylinder",
    features: ["Toyota Safety Sense", "JBL Premium Audio", "Panoramic Sunroof", "Wireless Charging", "Head-Up Display"],
    images: ["/car-images/toyota-camry-silver.jpg"],
    location: "Dallas, TX",
    sellerType: "dealer",
    vin: "4T1BZ1HK5MU123456",
    status: "active",
    views: 275,
    createdAt: new Date("2023-05-25").toISOString(),
    expiresAt: new Date("2023-08-25").toISOString(),
    isPremium: false,
    isFeatured: false,
    specifications: {
      mpg: "28 city / 39 hwy",
      horsepower: "203 hp",
      torque: "184 lb-ft",
      acceleration: "7.6 sec 0-60 mph",
      engineType: "4-cylinder",
      weight: "3340 lbs",
      dimensions: "192.1\" L x 72.4\" W x 56.9\" H"
    }
  }
];

export function getCarById(id: number): DummyCar | undefined {
  return dummyCars.find(car => car.id === id);
}

export function getCarsByIds(ids: number[]): DummyCar[] {
  return dummyCars.filter(car => ids.includes(car.id));
}

export function searchCars(query: string): DummyCar[] {
  const lowercaseQuery = query.toLowerCase();
  return dummyCars.filter(car => 
    car.make.toLowerCase().includes(lowercaseQuery) ||
    car.model.toLowerCase().includes(lowercaseQuery) ||
    car.title.toLowerCase().includes(lowercaseQuery) ||
    car.year.toString().includes(lowercaseQuery)
  );
}