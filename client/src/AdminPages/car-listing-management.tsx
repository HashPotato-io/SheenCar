

import Sidebar from "@/components/AdminComponents/Sidebar";
import { useState } from "react";
import { Dropdown } from "@/components/AdminComponents/CustomDropdown";
import CarCards from "@/components/cards/car-cards";
import Pagination2 from "@/components/ui/pagination2";
export default function CarListingManagement() {

    interface Cars {
        id: number
        make: string
        model: string
        year: number
        price: number
        image: string
    }
    const cars = [
        {
            id: 1,
            make: "Toyota",
            model: "Camry",
            year: 2022,
            price: 25000,
            image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 2,
            make: "Honda",
            model: "Accord",
            year: 2021,
            price: 23000,
            image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 3,
            make: "Ford",
            model: "Mustang",
            year: 2023,
            price: 35000,
            image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 4,
            make: "Tesla",
            model: "Model 3",
            year: 2022,
            price: 45000,
            image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 5,
            make: "BMW",
            model: "X5",
            year: 2021,
            price: 60000,
            image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
        },
    ];
    const privateSellerCars = [

        {
            id: 2,
            make: "Honda",
            model: "Accord",
            year: 2021,
            price: 23000,
            image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 3,
            make: "Ford",
            model: "Mustang",
            year: 2023,
            price: 35000,
            image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 4,
            make: "Tesla",
            model: "Model 3",
            year: 2022,
            price: 45000,
            image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 5,
            make: "BMW",
            model: "X5",
            year: 2021,
            price: 60000,
            image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
        },
    ];
    const dealerCars = [

        {
            id: 3,
            make: "Ford",
            model: "Mustang",
            year: 2023,
            price: 35000,
            image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 4,
            make: "Tesla",
            model: "Model 3",
            year: 2022,
            price: 45000,
            image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 5,
            make: "BMW",
            model: "X5",
            year: 2021,
            price: 60000,
            image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
        },
    ];


    const [status, setStatus] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [selectedTab, setSelectedTab] = useState("All");

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4

    const carsPagination = (carType: Cars[]) => {
        const paginatedCars = carType.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );
        const total = Math.ceil(carType.length / itemsPerPage)
     return { paginatedCars, total };
    }


    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
    };

   


    const statusOptions = [
        { value: "approved", label: "Approved" },
        { value: "pending", label: "Pending " },
        { value: "rejected", label: "Rejected " },
    ];

    const makeOptions = [
        { value: "option2a", label: "Toyota " },
        { value: "option2b", label: "Honda" },
          { value: "option2c", label: "Civi" },
    ];
  const modelOptions = [
        { value: "option2a", label: "Camry " },
        { value: "option2b", label: "Highlande" },
          { value: "option2c", label: "634" },
    ];
    const yearOptions = [
        { value: "option2a", label: "1995 " },
        { value: "option2b", label: "1996" },
          { value: "option2c", label: "1997" },
    ];

     let carData, totalPages = 1;
    if (selectedTab === "All") {
        const { paginatedCars, total } = carsPagination(cars);
        carData = paginatedCars;
        totalPages = total;
    } else if (selectedTab === "Private Seller Cars") {
        const { paginatedCars, total } = carsPagination(privateSellerCars);
        carData = paginatedCars;
        totalPages = total;
    } else if (selectedTab === "Dealer Cars") {
        const { paginatedCars, total } = carsPagination(dealerCars);
        carData = paginatedCars;
        totalPages = total;
    }
    return (


        <div className=" flex min-h-screen w-full  bg-[#F8F8F8]">
            <Sidebar />


            <div className="flex-1  px-6">
                <h1 className="text-3xl font-semibold mt-16 "
                >Car Listings Management</h1>
                <section>
                    <div className="flex gap-8 border-b py-3 mt-6 mb-2 px-8 border-t border-[#DBDBDB]  ">
                        <button
                            onClick={() => handleTabClick("All")}
                            className={`pb-1 text-xl  ${selectedTab === "All" ? "border-b text-black border-black" : "text-[#6E6E6E]"
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => handleTabClick("Private Seller Cars")}
                            className={`pb-1 text-xl ${selectedTab === "Private Seller Cars" ? "border-b text-black border-black" : "text-[#6E6E6E]"
                                }`}
                        >
                            Private Seller Cars
                        </button>
                        <button
                            onClick={() => handleTabClick("Dealer Cars")}
                            className={`pb-1 text-xl ${selectedTab === "Dealer Cars" ? "border-b text-black border-black" : "text-[#6E6E6E]"
                                }`}
                        >
                            Dealer Cars
                        </button>
                    </div>

                </section>


                <section className="bg-white flex  justify-between  gap-4 w-full rounded-lg shadow-md py-6 px-6 my-6 focus:outline-none">



                    <Dropdown
                        placeholder="Status"
                        options={statusOptions}
                        value={status}
                        onChange={setStatus}
                        className=""
                    />
                    <Dropdown
                        placeholder="Make"
                        options={makeOptions}
                        value={make}
                        onChange={setMake}
                        className=""
                    />

                    <Dropdown
                        placeholder="Model"
                        options={modelOptions}
                        value={model}
                        onChange={setModel}
                        className=""
                    />
                    <Dropdown
                        placeholder="Year"
                        options={yearOptions}
                        value={year}
                        onChange={setYear}
                        className=""
                    />
                    <button
                        onClick={() => {
                            console.log("Button clicked", { status, make, model, year });
                        }}
                        className="bg-[#003A2F] text-white px-6 py-1 rounded-md transition"
                    >
                        Search
                    </button>


                </section>

                <section>
                    <div className="flex flex-wrap  gap-4">
                          {carData?.map((car) => (
                            <CarCards key={car.id} car={car} linkUrl={`/cars/${car.id}`} small={false} />
                        ))}
                    </div>


                </section>
                <Pagination2
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => setCurrentPage(page)}
                    className="mt-4"
                />



            </div>
        </div>




    )
}