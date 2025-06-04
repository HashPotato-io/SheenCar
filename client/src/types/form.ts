export interface FormData {
  // Basic Information
  make: string;
  model: string;
  year: string;
  mileage: string;
  mileageType: string;
  transmission: string;
  fuelType: string;
  condition: string;
  seatingCapacity: string;
  doors: string;
  bodyType: string;
  zipCode: string;
  interiorColor: string;
  exteriorColor: string;
  vin: string;
  description: string;
  engineSize: string;
  powerOutput: string;
  
  // Safety Features
  airbags: string;
  seatbelts: string;
  immobilizer: boolean;
  abs: boolean;
  childLock: boolean;
  isofix: boolean;
  
  // Exterior Features
  alloyWheels: boolean;
  sideMirrorsWithIndicators: boolean;
  frontFogLights: boolean;
  
  // Infotainment Features
  displaySize: string;
  frontSpeakers: boolean;
  rearSpeakers: boolean;
  usbAuxCable: boolean;
  
  // Comfort Features
  seatMaterial: string;
  airConditioner: boolean;
  powerWindows: boolean;
  keylessEntry: boolean;
  climateControl: boolean;
  rearFoldingSeat: boolean;
  
  // Engine Specifications
  engineType: string;
  cylinder: string;
  driveType: string;
  gearbox: string;
  powerAssisted: boolean;
  
  // Wheels and Tires
  wheelType: string;
  tireSize: string;
  fuelTankCapacity: string;
  
  // Pricing
  price: string;
  currency: string;
  priceNegotiable: boolean;
  
  // Trading Details
  tradeCar: boolean;
  acceptableTradeCars: string;
  adjustPriceDifference: boolean;
  tradeCarMake: string;
  tradeCarModel: string;

  // Contact Details
  showContactDetails: boolean;
} 