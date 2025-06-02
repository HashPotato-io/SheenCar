import Sidebar from "@/components/AdminComponents/Sidebar";
import dummyProfile from "../assets/dummyProfile.svg"
import { useState } from "react";
import { Dropdown } from "@/components/AdminComponents/CustomDropdown";
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

    const [status, setStatus] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");

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


        <div className=" flex min-h-screen  bg-[#F8F8F8]">
            <Sidebar />
            <div>
                <h1 className="text-3xl font-semibold mt-6 px-6"
                >User Insights</h1>

                <div className="flex-1 justify-between flex gap-4  px-6">

                    <div className="flex-grow">
                        <section className="flex items-center  rounded-lg shadow-md justify-between gap-4 xl:gap-6 py-6 px-6 my-6 bg-white focus:outline-none">
                            <Dropdown
                                placeholder="Status"
                                options={statusOptions}
                                value={status}
                                onChange={setStatus}
                                className="w-40"
                            />
                            <Dropdown
                                placeholder="Make"
                                options={makeOptions}
                                value={make}
                                onChange={setMake}
                                className="w-40"
                            />
                            <Dropdown
                                placeholder="Model"
                                options={modelOptions}
                                value={model}
                                onChange={setModel}
                                className="w-40"
                            />
                            <Dropdown
                                placeholder="Year"
                                options={yearOptions}
                                value={year}
                                onChange={setYear}
                                className="w-40"
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

                        </section>
                    </div>
                    <div className="bg-white rounded-lg py-6 my-6 shadow-lg px-8 min-w-sm">
                        <div className="flex flex-col justify-between items-center mt-4 border-b  border-[#9F9F9F] pb-10">

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
        </div>




    )
}