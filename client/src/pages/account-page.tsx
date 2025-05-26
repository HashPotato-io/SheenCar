import React, { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProfileActionButton from "@/components/profile-action-button";
import EditIcon from "../assets/Icon/edit.svg";
import ProductCardVariant2 from "@/components/cards/product-card-variant-2";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Pagination2 from "@/components/ui/pagination2";

const tabList = ["Active", "Pending", "Closed", "Request"];

const dummyCars = [
  // Active Tab Cars (18 cars = 2 pages)
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2023,
    price: 25000,
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=400",
    status: "Active",
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
  },
  {
    id: 7,
    make: "Lexus",
    model: "ES",
    year: 2023,
    price: 42000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
  },
  {
    id: 8,
    make: "Acura",
    model: "TLX",
    year: 2023,
    price: 38000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
  },
  {
    id: 9,
    make: "Volvo",
    model: "S60",
    year: 2023,
    price: 41000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
  },
  {
    id: 10,
    make: "Genesis",
    model: "G70",
    year: 2023,
    price: 45000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
  },
  {
    id: 11,
    make: "Mazda",
    model: "Mazda6",
    year: 2023,
    price: 32000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
  },
  {
    id: 12,
    make: "Subaru",
    model: "Legacy",
    year: 2023,
    price: 28000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
  },
  {
    id: 13,
    make: "Kia",
    model: "K5",
    year: 2023,
    price: 26000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
  },
  {
    id: 14,
    make: "Hyundai",
    model: "Sonata",
    year: 2023,
    price: 24000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
  },
  {
    id: 15,
    make: "Nissan",
    model: "Altima",
    year: 2023,
    price: 27000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
  },
  {
    id: 16,
    make: "Mitsubishi",
    model: "Mirage",
    year: 2023,
    price: 22000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
  },
  {
    id: 17,
    make: "Buick",
    model: "Regal",
    year: 2023,
    price: 35000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
  },
  {
    id: 18,
    make: "Chrysler",
    model: "300",
    year: 2023,
    price: 36000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Active",
  },

  // Pending Tab Cars (18 cars = 2 pages)
  {
    id: 19,
    make: "Ford",
    model: "Mustang",
    year: 2023,
    price: 35000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
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
  },
  {
    id: 26,
    make: "Porsche",
    model: "Cayman",
    year: 2023,
    price: 65000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
  },
  {
    id: 27,
    make: "Maserati",
    model: "Ghibli",
    year: 2023,
    price: 72000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
  },
  {
    id: 28,
    make: "Alfa Romeo",
    model: "Giulia",
    year: 2023,
    price: 45000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
  },
  {
    id: 29,
    make: "Jaguar",
    model: "XE",
    year: 2023,
    price: 42000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
  },
  {
    id: 30,
    make: "Bentley",
    model: "Continental",
    year: 2023,
    price: 220000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
  },
  {
    id: 31,
    make: "Rolls-Royce",
    model: "Ghost",
    year: 2023,
    price: 350000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
  },
  {
    id: 32,
    make: "Aston Martin",
    model: "DB11",
    year: 2023,
    price: 200000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
  },
  {
    id: 33,
    make: "McLaren",
    model: "720S",
    year: 2023,
    price: 300000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
  },
  {
    id: 34,
    make: "Ferrari",
    model: "F8",
    year: 2023,
    price: 280000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
  },
  {
    id: 35,
    make: "Lamborghini",
    model: "Huracan",
    year: 2023,
    price: 250000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
  },
  {
    id: 36,
    make: "Bugatti",
    model: "Chiron",
    year: 2023,
    price: 3000000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Pending",
  },

  // Closed Tab Cars (27 cars = 3 pages)
  {
    id: 37,
    make: "Mazda",
    model: "CX-5",
    year: 2022,
    price: 32000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
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
  },
  {
    id: 43,
    make: "Jeep",
    model: "Grand Cherokee",
    year: 2022,
    price: 45000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 44,
    make: "Jeep",
    model: "Grand Cherokee",
    year: 2022,
    price: 45000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 45,
    make: "GMC",
    model: "Sierra",
    year: 2022,
    price: 42000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 46,
    make: "Ram",
    model: "1500",
    year: 2022,
    price: 40000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 47,
    make: "Toyota",
    model: "Tacoma",
    year: 2022,
    price: 35000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 48,
    make: "Honda",
    model: "Ridgeline",
    year: 2022,
    price: 38000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 49,
    make: "Nissan",
    model: "Frontier",
    year: 2022,
    price: 32000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 50,
    make: "Chevrolet",
    model: "Colorado",
    year: 2022,
    price: 34000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 51,
    make: "GMC",
    model: "Canyon",
    year: 2022,
    price: 36000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 52,
    make: "Ford",
    model: "Ranger",
    year: 2022,
    price: 33000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 53,
    make: "Toyota",
    model: "4Runner",
    year: 2022,
    price: 42000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 54,
    make: "Jeep",
    model: "Wrangler",
    year: 2022,
    price: 45000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 55,
    make: "Land Rover",
    model: "Defender",
    year: 2022,
    price: 65000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 56,
    make: "Mercedes",
    model: "G-Class",
    year: 2022,
    price: 150000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 57,
    make: "Toyota",
    model: "Land Cruiser",
    year: 2022,
    price: 85000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 58,
    make: "Lexus",
    model: "LX",
    year: 2022,
    price: 95000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 59,
    make: "Nissan",
    model: "Patrol",
    year: 2022,
    price: 75000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 60,
    make: "Mitsubishi",
    model: "Pajero",
    year: 2022,
    price: 55000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 61,
    make: "Suzuki",
    model: "Jimny",
    year: 2022,
    price: 35000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 62,
    make: "Isuzu",
    model: "D-Max",
    year: 2022,
    price: 40000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },
  {
    id: 63,
    make: "Mahindra",
    model: "Thar",
    year: 2022,
    price: 30000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Closed",
  },

  // Request Tab Cars (18 cars = 2 pages)
  {
    id: 64,
    make: "Land Rover",
    model: "Range Rover",
    year: 2023,
    price: 85000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
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
  },
  {
    id: 70,
    make: "Bentley",
    model: "Bentayga",
    year: 2023,
    price: 180000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
  },
  {
    id: 71,
    make: "Rolls-Royce",
    model: "Cullinan",
    year: 2023,
    price: 350000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
  },
  {
    id: 72,
    make: "Mercedes",
    model: "Maybach",
    year: 2023,
    price: 200000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
  },
  {
    id: 73,
    make: "Lexus",
    model: "LX",
    year: 2023,
    price: 95000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
  },
  {
    id: 74,
    make: "Infiniti",
    model: "QX80",
    year: 2023,
    price: 85000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
  },
  {
    id: 75,
    make: "Cadillac",
    model: "Escalade",
    year: 2023,
    price: 78000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
  },
  {
    id: 76,
    make: "Lincoln",
    model: "Navigator",
    year: 2023,
    price: 82000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
  },
  {
    id: 77,
    make: "GMC",
    model: "Yukon",
    year: 2023,
    price: 75000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
  },
  {
    id: 78,
    make: "Chevrolet",
    model: "Suburban",
    year: 2023,
    price: 72000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
  },
  {
    id: 79,
    make: "Toyota",
    model: "Sequoia",
    year: 2023,
    price: 68000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
  },
  {
    id: 80,
    make: "Nissan",
    model: "Armada",
    year: 2023,
    price: 65000,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&w=400",
    status: "Request",
  }
];

const Account = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabFade, setTabFade] = useState(false);
  const [postAdFade, setPostAdFade] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // 3 columns * 3 rows

  // Calculate total pages based on filtered cars
  const filteredCars = dummyCars.filter((car) => car.status === tabList[selectedTab]);
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
          backgroundImage: `url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80)`,
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
              fontWeight: 500,
              fontSize: 16,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 12,
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
            <span style={{ fontSize: 22, lineHeight: 1 }}>+</span>
            <span>Post Ad</span>
          </button>
        </div>
        {/* Four tabs */}
        <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
          {tabList.map((tab, idx) => (
            <button
              key={tab}
              onClick={() => handleTabClick(idx)}
              style={{
                width: 194,
                height: 44,
                borderRadius: 24,
                border: "0.7px solid #003A2F",
                background: selectedTab === idx ? "#003A2F" : "#fff",
                color: selectedTab === idx ? "#fff" : "#003A2F",
                fontWeight: 500,
                fontSize: 18,
                paddingRight: 20,
                paddingLeft: 20,
                cursor: "pointer",
                transition: "background 0.3s, color 0.3s",
                outline: "none",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Tab content with dissolve animation */}
        <div
          style={{
            minHeight: 120,
            transition: "opacity 300ms ease-in-out",
            opacity: tabFade ? 0 : 1,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              marginBottom: 32,
            }}
          >
            {getCurrentPageItems().map((car) => (
              <ProductCardVariant2
                key={car.id}
                car={car}
                linkUrl={`/car/${car.id}`}
              />
            ))}
          </div>
          <Pagination2
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Account;
