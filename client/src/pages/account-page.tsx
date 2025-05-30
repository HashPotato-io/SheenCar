import React, { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProfileActionButton from "@/components/profile-action-button";
import EditIcon from "../assets/Icon/edit.svg";
import EditIcon2 from "../assets/Icon/edit2.svg";
import Plus from "../assets/Icon/Plus.svg";
import ProductCardVariant2 from "@/components/cards/product-card-variant-2";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Pencil, X } from "lucide-react";
import Pagination2 from "@/components/ui/pagination2";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomPhoneInput from "@/components/ui/phone-input";
import TabSection from "@/components/ui/tab-section";
import AccountBanner from "../assets/account-banner.png";

const tabList = ["Active", "Pending", "Closed", "Request"];

const dummyCars = [
  // Active Tab Cars (18 cars = 2 pages)
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2023,
    price: 25000,
    image:
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400",
    status: "Active",
    buttonState: "boostAd"
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2022,
    price: 22000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
    buttonState: "boosted"
  },
  {
    id: 3,
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 45000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
    buttonState: "boostAd"
  },
  {
    id: 4,
    make: "BMW",
    model: "X5",
    year: 2022,
    price: 55000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
    buttonState: "boosted"
  },
  {
    id: 5,
    make: "Mercedes",
    model: "C-Class",
    year: 2023,
    price: 48000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
    buttonState: "renewBoost"
  },
  {
    id: 6,
    make: "Audi",
    model: "A4",
    year: 2022,
    price: 42000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
    buttonState: "boosted"
  },
  {
    id: 7,
    make: "Lexus",
    model: "ES",
    year: 2023,
    price: 42000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
    buttonState: "boostAd"
  },
  {
    id: 8,
    make: "Acura",
    model: "TLX",
    year: 2023,
    price: 38000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
    buttonState: "boosted"
  },
  {
    id: 9,
    make: "Volvo",
    model: "S60",
    year: 2023,
    price: 41000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
    buttonState: "boostAd"
  },
  {
    id: 10,
    make: "Genesis",
    model: "G70",
    year: 2023,
    price: 45000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
    buttonState: "boosted"
  },
  {
    id: 11,
    make: "Mazda",
    model: "Mazda6",
    year: 2023,
    price: 32000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
    buttonState: "boostAd"
  },
  {
    id: 12,
    make: "Subaru",
    model: "Legacy",
    year: 2023,
    price: 28000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
    buttonState: "boosted"
  },
  {
    id: 13,
    make: "Kia",
    model: "K5",
    year: 2023,
    price: 26000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
    buttonState: "boostAd"
  },
  {
    id: 14,
    make: "Hyundai",
    model: "Sonata",
    year: 2023,
    price: 24000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
    buttonState: "boosted"
  },
  {
    id: 15,
    make: "Nissan",
    model: "Altima",
    year: 2023,
    price: 27000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
    buttonState: "boostAd"
  },
  {
    id: 16,
    make: "Mitsubishi",
    model: "Mirage",
    year: 2023,
    price: 22000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
    buttonState: "boosted"
  },
  {
    id: 17,
    make: "Buick",
    model: "Regal",
    year: 2023,
    price: 35000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
    buttonState: "boostAd"
  },
  {
    id: 18,
    make: "Chrysler",
    model: "300",
    year: 2023,
    price: 36000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
    buttonState: "boosted"
  },

  // Pending Tab Cars (18 cars = 2 pages)
  {
    id: 19,
    make: "Ford",
    model: "Mustang",
    year: 2023,
    price: 35000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
    buttonState: "withdrawAd"
  },
  {
    id: 20,
    make: "Chevrolet",
    model: "Corvette",
    year: 2022,
    price: 65000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
    buttonState: "withdrawAd"
  },
  {
    id: 21,
    make: "Porsche",
    model: "911",
    year: 2023,
    price: 95000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
    buttonState: "withdrawAd"
  },
  {
    id: 22,
    make: "Lexus",
    model: "RX",
    year: 2022,
    price: 52000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
    buttonState: "withdrawAd"
  },
  {
    id: 23,
    make: "Volvo",
    model: "XC90",
    year: 2023,
    price: 58000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
    buttonState: "withdrawAd"
  },
  {
    id: 24,
    make: "Jaguar",
    model: "F-Pace",
    year: 2022,
    price: 62000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
    buttonState: "withdrawAd"
  },
  {
    id: 25,
    make: "Mazda",
    model: "CX-5",
    year: 2022,
    price: 32000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
    buttonState: "withdrawAd"
  },
  {
    id: 26,
    make: "Porsche",
    model: "Cayman",
    year: 2023,
    price: 65000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
    buttonState: "withdrawAd"
  },
  {
    id: 27,
    make: "Maserati",
    model: "Ghibli",
    year: 2023,
    price: 72000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
    buttonState: "withdrawAd"
  },
  {
    id: 28,
    make: "Alfa Romeo",
    model: "Giulia",
    year: 2023,
    price: 45000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
    buttonState: "withdrawAd"
  },
  {
    id: 29,
    make: "Jaguar",
    model: "XE",
    year: 2023,
    price: 42000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
    buttonState: "withdrawAd"
  },
  {
    id: 30,
    make: "Bentley",
    model: "Continental",
    year: 2023,
    price: 220000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
    buttonState: "withdrawAd"
  },
  {
    id: 31,
    make: "Rolls-Royce",
    model: "Ghost",
    year: 2023,
    price: 350000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
    buttonState: "withdrawAd"
  },
  {
    id: 32,
    make: "Aston Martin",
    model: "DB11",
    year: 2023,
    price: 200000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
    buttonState: "withdrawAd"
  },
  {
    id: 33,
    make: "McLaren",
    model: "720S",
    year: 2023,
    price: 300000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
    buttonState: "withdrawAd"
  },
  {
    id: 34,
    make: "Ferrari",
    model: "F8",
    year: 2023,
    price: 280000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
    buttonState: "withdrawAd"
  },
  {
    id: 35,
    make: "Lamborghini",
    model: "Huracan",
    year: 2023,
    price: 250000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
    buttonState: "withdrawAd"
  },
  {
    id: 36,
    make: "Bugatti",
    model: "Chiron",
    year: 2023,
    price: 3000000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
    buttonState: "withdrawAd"
  },

  // Closed Tab Cars (27 cars = 3 pages)
  {
    id: 37,
    make: "Mazda",
    model: "CX-5",
    year: 2022,
    price: 32000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 38,
    make: "Subaru",
    model: "Outback",
    year: 2023,
    price: 34000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 39,
    make: "Hyundai",
    model: "Tucson",
    year: 2022,
    price: 28000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 40,
    make: "Kia",
    model: "Telluride",
    year: 2023,
    price: 38000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 41,
    make: "Nissan",
    model: "Rogue",
    year: 2022,
    price: 29000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 42,
    make: "Mitsubishi",
    model: "Outlander",
    year: 2023,
    price: 27000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 43,
    make: "Jeep",
    model: "Grand Cherokee",
    year: 2022,
    price: 45000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 44,
    make: "Jeep",
    model: "Grand Cherokee",
    year: 2022,
    price: 45000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 45,
    make: "GMC",
    model: "Sierra",
    year: 2022,
    price: 42000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 46,
    make: "Ram",
    model: "1500",
    year: 2022,
    price: 40000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 47,
    make: "Toyota",
    model: "Tacoma",
    year: 2022,
    price: 35000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 48,
    make: "Honda",
    model: "Ridgeline",
    year: 2022,
    price: 38000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 49,
    make: "Nissan",
    model: "Frontier",
    year: 2022,
    price: 32000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 50,
    make: "Chevrolet",
    model: "Colorado",
    year: 2022,
    price: 34000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 51,
    make: "GMC",
    model: "Canyon",
    year: 2022,
    price: 36000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 52,
    make: "Ford",
    model: "Ranger",
    year: 2022,
    price: 33000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 53,
    make: "Toyota",
    model: "4Runner",
    year: 2022,
    price: 42000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 54,
    make: "Jeep",
    model: "Wrangler",
    year: 2022,
    price: 45000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 55,
    make: "Land Rover",
    model: "Defender",
    year: 2022,
    price: 65000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 56,
    make: "Mercedes",
    model: "G-Class",
    year: 2022,
    price: 150000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 57,
    make: "Toyota",
    model: "Land Cruiser",
    year: 2022,
    price: 85000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 58,
    make: "Lexus",
    model: "LX",
    year: 2022,
    price: 95000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 59,
    make: "Nissan",
    model: "Patrol",
    year: 2022,
    price: 75000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 60,
    make: "Mitsubishi",
    model: "Pajero",
    year: 2022,
    price: 55000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 61,
    make: "Suzuki",
    model: "Jimny",
    year: 2022,
    price: 35000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 62,
    make: "Isuzu",
    model: "D-Max",
    year: 2022,
    price: 40000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },
  {
    id: 63,
    make: "Mahindra",
    model: "Thar",
    year: 2022,
    price: 30000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
    buttonState: "reopenAd"
  },

  // Request Tab Cars (18 cars = 2 pages)
  {
    id: 64,
    make: "Land Rover",
    model: "Range Rover",
    year: 2023,
    price: 85000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
    buttonState: "closeRequest"
  },
  {
    id: 65,
    make: "Genesis",
    model: "G80",
    year: 2022,
    price: 58000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
    buttonState: "closeRequest"
  },
  {
    id: 66,
    make: "Acura",
    model: "MDX",
    year: 2023,
    price: 52000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
    buttonState: "reopenRequest"
  },
  {
    id: 67,
    make: "Infiniti",
    model: "QX60",
    year: 2022,
    price: 48000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
    buttonState: "reopenRequest"
  },
  {
    id: 68,
    make: "Lincoln",
    model: "Aviator",
    year: 2023,
    price: 62000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
    buttonState: "closeRequest"
  },
  {
    id: 69,
    make: "Cadillac",
    model: "Escalade",
    year: 2022,
    price: 78000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
    buttonState: "closeRequest"
  },
  {
    id: 70,
    make: "Bentley",
    model: "Bentayga",
    year: 2023,
    price: 180000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
    buttonState: "closeRequest"
  },
  {
    id: 71,
    make: "Rolls-Royce",
    model: "Cullinan",
    year: 2023,
    price: 350000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
    buttonState: "closeRequest"
  },
  {
    id: 72,
    make: "Mercedes",
    model: "Maybach",
    year: 2023,
    price: 200000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
    buttonState: "closeRequest"
  },
  {
    id: 73,
    make: "Lexus",
    model: "LX",
    year: 2023,
    price: 95000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
    buttonState: "closeRequest"
  },
  {
    id: 74,
    make: "Infiniti",
    model: "QX80",
    year: 2023,
    price: 85000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
    buttonState: "closeRequest"
  },
  {
    id: 75,
    make: "Cadillac",
    model: "Escalade",
    year: 2023,
    price: 78000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
    buttonState: "closeRequest"
  },
  {
    id: 76,
    make: "Lincoln",
    model: "Navigator",
    year: 2023,
    price: 82000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
    buttonState: "closeRequest"
  },
  {
    id: 77,
    make: "GMC",
    model: "Yukon",
    year: 2023,
    price: 75000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
    buttonState: "closeRequest"
  },
  {
    id: 78,
    make: "Chevrolet",
    model: "Suburban",
    year: 2023,
    price: 72000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
    buttonState: "closeRequest"
  },
  {
    id: 79,
    make: "Toyota",
    model: "Sequoia",
    year: 2023,
    price: 68000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
    buttonState: "closeRequest"
  },
  {
    id: 80,
    make: "Nissan",
    model: "Armada",
    year: 2023,
    price: 65000,
    image:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
    buttonState: "closeRequest"
  },
];

const Account = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabFade, setTabFade] = useState(false);
  const [postAdFade, setPostAdFade] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // 3 columns * 3 rows

  // Calculate total pages based on filtered cars
  const filteredCars = dummyCars.filter(
    (car) => car.status === tabList[selectedTab]
  );
  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredCars.slice(startIndex, endIndex);
  };

  const handleTabClick = (idx: number) => {
    if (selectedTab !== idx) {
      setTabFade(true);
      setTimeout(() => {
        setSelectedTab(idx);
        setTabFade(false);
      }, 300);
    }
  };

  const handlePostAdClick = () => {
    setPostAdFade(true);
    setTimeout(() => {
      setPostAdFade(false);
      // No navigation as per requirements
    }, 300);
  };

  // Add new state for modal
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  // Add handler for profile edit
  const handleEditProfile = () => {
    setIsEditProfileOpen(true);
  };

  // Add handler for saving profile changes
  const handleSaveProfile = () => {
    // TODO: Implement save logic
    setIsEditProfileOpen(false);
  };

  // Add handler for password change
  const handleChangePassword = () => {
    // TODO: Implement password change logic
  };

  return (
    <>
      <Header />
      <section
        style={{
          width: "100%",
          height: 387,
          background: "#f5f6fa",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundImage: `url(${AccountBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1200,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "40px 32px 0 32px",
          }}
        >
          {/* User Profile Left */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 121,
                height: 121,
                borderRadius: "50%",
                background: "#d1d5db",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 36,
                color: "#555",
                marginRight: 24,
              }}
            >
              {/* Placeholder for profile image */}
              <span>U</span>
            </div>
            <div>
              <div style={{ fontWeight: 400, fontSize: 29, color: "#FFFFFF" }}>
                User Name
              </div>
              <div style={{ color: "#FFFFFF", fontWeight: 400, fontSize: 19 }}>
                user@email.com
              </div>
            </div>
          </div>
          {/* Edit Profile Button Right */}
          <ProfileActionButton
            icon={
              <img
                src={EditIcon}
                alt="Edit"
                style={{ width: 20, height: 20, display: "block" }}
              />
            }
            title="Edit Profile"
            onClick={handleEditProfile}
          />
        </div>
        {/* Tabs inside HeroSection, at the bottom */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
            borderBottom: "1px solid #e5e7eb",
            marginTop: 32,
            color: "#FFFFFF",
          }}
        >
          <button
            style={{
              flex: 1,
              background: "none",
              border: "none",
              borderBottom: "3px solid #FFFFFF",
              fontWeight: 400,
              fontSize: 20,
              padding: "20px 0",
              cursor: "pointer",
              color: "#FFFFFF",
            }}
          >
            My Ads
          </button>
          <button
            style={{
              flex: 1,
              background: "none",
              border: "none",
              borderBottom: "3px solid transparent",
              fontWeight: 400,
              fontSize: 20,
              padding: "20px 0",
              cursor: "pointer",
            }}
          >
            Trade Deals
          </button>
          <button
            style={{
              flex: 1,
              background: "none",
              border: "none",
              borderBottom: "3px solid transparent",
              fontWeight: 400,
              fontSize: 20,
              padding: "20px 0",
              cursor: "pointer",
            }}
          >
            Offers
          </button>
        </div>
      </section>
      <div
        style={{ maxWidth: 1200, margin: "40px auto 0 auto", width: "100%" }}
      >
        {/* My Ads header and Post Ad button */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <div style={{ fontWeight: 400, fontSize: 40, color: "#000000" }}>
            My <span style={{ color: "#AF8C32" }}>Ads</span>
          </div>
          <button
            style={{
              width: 216,
              height: 44,
              background: "#003A2F",
              color: "#fff",
              border: "1px solid #003A2F",
              borderRadius: 6,
              fontWeight: 300,
              fontSize: 16,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              paddingRight: 20,
              paddingLeft: 20,
              opacity: postAdFade ? 0 : 1,
              transition: "opacity 300ms ease-in-out",
              justifyContent: "center",
              textAlign: "center",
            }}
            onClick={handlePostAdClick}
          >
            {/* Plus icon */}
            <img src={Plus} />
            <span>Post Ad</span>
          </button>
        </div>
        {/* Replace the tabs section with: */}
        <TabSection
          tabList={tabList}
          selectedTab={selectedTab}
          tabFade={tabFade}
          currentPage={currentPage}
          totalPages={totalPages}
          getCurrentPageItems={getCurrentPageItems}
          onTabClick={handleTabClick}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Update the Edit Profile Modal */}
      <Dialog open={isEditProfileOpen} onOpenChange={setIsEditProfileOpen}>
        <DialogContent
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:max-w-[633px] rounded-[34px] bg-[#F8F8F8]"
          style={{
            width: 633,
            height: 500,
            padding: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Fixed Header */}
          <div className="flex items-center justify-between px-[42px] py-4">
            <DialogTitle
              className="text-2xl font-semibold"
              style={{
                fontWeight: 600,
                fontSize: "24px",
                letterSpacing: "1%",
                color: "#000000",
              }}
            >
              Edit Profile
            </DialogTitle>
          </div>

          {/* Scrollable Content */}
          <div
            className="overflow-y-auto px-[42px] pb-[45px] flex-1"
            style={{
              maxHeight: "calc(645px - 80px)", // Adjust based on header height
            }}
          >
            <div className="grid gap-6 py-4">
              {/* Profile Image Upload with Edit Icon */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="w-[133px] h-[133px] rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-2xl text-gray-500">U</span>
                  </div>
                  <button
                    className="absolute bottom-0 right-0 w-8 h-8 flex items-center justify-center text-white"
                    onClick={() => {
                      /* TODO: Implement image upload */
                    }}
                  >
                    <img
                      src={EditIcon2}
                      alt="Edit"
                      style={{ width: 20, height: 20, display: "block" }}
                    />
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  value={profileData.firstName}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      firstName: e.target.value,
                    })
                  }
                  style={{
                    width: 263,
                    height: 40,
                    padding: "10px 16px",
                    borderRadius: 6,
                    border: "1px solid #CFCFCF",
                    background: "transparent",
                  }}
                />
                <Input
                  placeholder="Last Name"
                  value={profileData.lastName}
                  onChange={(e) =>
                    setProfileData({ ...profileData, lastName: e.target.value })
                  }
                  style={{
                    width: 263,
                    height: 40,
                    padding: "10px 16px",
                    borderRadius: 6,
                    border: "1px solid #CFCFCF",
                    background: "transparent",
                  }}
                />
              </div>

              {/* Phone Number with Country Selector */}
              <CustomPhoneInput
                value={profileData.phone}
                onChange={(phone) => setProfileData({ ...profileData, phone })}
              />

              {/* Email Input */}
              <Input
                placeholder="Email"
                type="email"
                value={profileData.email}
                onChange={(e) =>
                  setProfileData({ ...profileData, email: e.target.value })
                }
                className="w-full"
                style={{
                  height: 40,
                  padding: "10px 16px",
                  borderRadius: 6,
                  border: "1px solid #CFCFCF",
                  background: "transparent",
                }}
              />

              {/* Password Label, Input, and Button */}
              <div>
                <div className="flex items-center gap-2">
                  {/*    <Input
                    id="password" // Add id to link with label
                    placeholder="********" // Updated placeholder to match image
                    type="password"
                    value={profileData.password}
                    onChange={(e) =>
                      setProfileData({ ...profileData, password: e.target.value })
                    }
                    className="flex-1" // Allow input to grow and take remaining space
                    style={{
                      height: 40,
                      padding: "10px 16px",
                      borderRadius: 6,
                      border: "1px solid #CFCFCF",
                      background: "transparent",
                    }}
                  /> */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      width: "100%",
                    }}
                  >
                    <Label
                      htmlFor="password"
                      className="mb-2 block text-base font-normal text-black"
                      style={{
                        fontWeight: 400,
                        fontSize: 16,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#000000",
                        marginBottom: 8, // Add some space below the label
                      }}
                    >
                      Password
                    </Label>
                    <div
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: 400,
                        fontSize: 14,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#747474",
                      }}
                    >
                      *********
                    </div>
                  </div>
                  <button
                    onClick={handleChangePassword}
                    style={{
                      width: 189, // Keep button fixed width
                      height: 40,
                      padding: "0 20px", // Padding inside the button
                      borderRadius: 6,
                      border: "1px solid #000000",
                      color: "#000000",
                      fontFamily: "Gilroy-Regular",
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: "100%",
                      letterSpacing: 0,
                      background: "transparent",
                      cursor: "pointer",
                      flexShrink: 0, // Prevent button from shrinking
                    }}
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4">
              {" "}
              {/* Container for Save Changes button */}
              <button
                onClick={handleSaveProfile}
                className="px-6 py-2 text-sm text-white bg-primary rounded-md hover:bg-primary/90 w-full" // Added w-full utility class
                style={{ height: 40 }} // Ensure height is consistent with other inputs/buttons
              >
                Save Changes
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
};

export default Account;
