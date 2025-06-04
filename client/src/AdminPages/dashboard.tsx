import Sidebar from "@/components/AdminComponents/Sidebar"
import dashboard1 from "../assets/dashboard1.svg"
import dashboard2 from "../assets/dashboard2.svg"
import dashboard3 from "../assets/dashboard3.svg"

export default function Dashboard() {
    return (
        <div className="flex bg-[#F8F8F8] min-h-screen">
            <Sidebar />
            <div className="p-4 md:p-8 flex-1">
                <h1 className="font-semibold text-2xl md:text-3xl my-6">Dashboard</h1>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-10 md:px-10 bg-white shadow-lg rounded-xl">
                    
                    <div className="flex items-center gap-4 text-center md:text-left">
                        <img src={dashboard1} alt="users" className="w-12 md:w-16" />
                        <div>
                            <p className="text-[#747474] text-sm">Total Users</p>
                            <p className="text-2xl font-bold">1312</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border-y md:border-y-0 md:border-x px-10 md:px-20 border-[#F0F0F0] text-center md:text-left">
                        <img src={dashboard2} alt="users" className="w-12 md:w-16" />
                        <div>
                            <p className="text-[#747474] text-sm">Total Listings</p>
                            <p className="text-2xl font-bold">1312</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-center md:text-left">
                        <img src={dashboard3} alt="users" className="w-12 md:w-16" />
                        <div>
                            <p className="text-[#747474] text-sm">Boosted Listings</p>
                            <p className="text-2xl font-bold">1312</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
