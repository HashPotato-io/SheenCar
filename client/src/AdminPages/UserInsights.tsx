import Sidebar from "@/components/AdminComponents/Sidebar";
import dummyProfile from "../assets/dummyProfile.svg"
import { useState } from "react";
import { Dropdown } from "@/components/AdminComponents/CustomDropdown";
import CarCards from "@/components/cards/car-cards";
import Pagination2 from "@/components/ui/pagination2";
export default function UserInsights() {

    const userDetails = {
        profile: dummyProfile,
        name: "Floyd Miles",
        userType: "Private User",
        email: "floyd12@gmail.com",
        phoneNumber: "02323321223",
        memberSince: "12/2/12",
        curretPlan: "Free Trial",
        carsListed: 12,
        listingsLeft: 3,
        adsBoosted: 3,
        onTrade: 4,
        onOffer: 4

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


    const [status, setStatus] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4
    const paginatedCars = cars.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(cars.length / itemsPerPage);


    const statusOptions = [
        { value: "option1a", label: "Newest" },
        { value: "option1b", label: "Oldest " },
    ];

    const makeOptions = [
        { value: "option2a", label: "Oldest " },
        { value: "option2b", label: "Newest to Oldest" },
    ];

    const modelOptions = makeOptions; // example reuse
    const yearOptions = makeOptions; // example reuse
    return (


        <div className=" flex min-h-screen w-full  bg-[#F8F8F8]">
            <Sidebar />


            <div className="flex flex-1 justify-between lg:justify-evenly  gap-5  px-6">

                <div className="lg:max-w-[448px] xl:max-w-[680px] 2xl:max-w-full">
                    <h1 className="text-3xl font-semibold mt-6 px-6"
                    >User Insights</h1>
                    <section className="bg-white rounded-lg shadow-md py-6 px-6 mx-1 my-6 focus:outline-none">
                        <div className="flex flex-col xl:flex-row justify-between xl:justify-normal gap-4">

                            <div className="flex gap-4 mb-4 lg:mb-0">
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
                            </div>

                            {/* Row 2 on lg and below: model, year, button */}
                            <div className="flex gap-4 items-center">
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
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="flex flex-wrap  gap-5">
                            {paginatedCars.map((car) => (
                                <CarCards
                                    key={car.id}
                                    car={car}
                                    linkUrl={`/cars/${car.id}`}
                                    small={true}
                                />
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
                <div className="bg-white min-w-60 lg:max-w-72 xl:min-w-60 xl:max-w-80 2xl:max-w-full flex-grow rounded-lg py-6 my-6 shadow-lg px-8 ">
                    <div className="flex flex-col justify-between items-center min-w-4xl mt-4 border-b  border-[#9F9F9F] pb-10">

                        <img src={userDetails.profile} />
                        <p className=" font-semibold text-lg">{userDetails.name}</p>
                        <span className="text-sm">{userDetails.userType}</span>
                    </div>

                    <section className="space-y-4 pt-10"
                    >

                        <div>
                            <h1 className="font-semibold ">Email</h1>
                            <p className="text-sm">{userDetails.email}</p>
                        </div>
                        <div>
                            <h1 className="font-semibold ">Phone Number</h1>
                            <p>{userDetails.phoneNumber}</p>
                        </div>
                        <div>
                            <h1 className="font-semibold ">Member Since</h1>
                            <p>{userDetails.memberSince}</p>
                        </div>
                        <div>
                            <h1 className="font-semibold ">Current Plan</h1>
                            <p>{userDetails.curretPlan}</p>
                        </div>
                        <div>
                            <h1 className="font-semibold ">Cars Listed</h1>
                            <p>{userDetails.carsListed}</p>
                        </div>
                        <div>
                            <h1 className="font-semibold ">Listings left <span>(based on plan)</span></h1>
                            <p>{userDetails.listingsLeft}</p>
                        </div>

                        <div>
                            <h1 className="font-semibold ">Ads Boosted</h1>
                            <p>{userDetails.adsBoosted}</p>
                        </div>
                        <div>
                            <h1 className="font-semibold ">On Trade</h1>
                            <p>{userDetails.onTrade}</p>
                        </div>
                        <div>
                            <h1 className="font-semibold ">On Offers</h1>
                            <p>{userDetails.onOffer}</p>
                        </div>
                    </section>

                </div>
            </div>
        </div>




    )
}