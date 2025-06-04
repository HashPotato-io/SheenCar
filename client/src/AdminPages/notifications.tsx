import NotificationCard from "@/components/AdminComponents/NotificationsCard"
import carListingIcon from "../assets/carListingIcon.svg"
import userRegisteredIcon from "../assets/userRegisteredIcon.svg"
import ButIfForMeIcon from "../assets/ButItForMeIcon.svg"
import SellItForMeIcon from "../assets/SellItForMeIcon.svg"
import NewSubscriptionIcon from "../assets/NewSubscriptionIcon.svg"
import Sidebar from "@/components/AdminComponents/Sidebar"
export default function Notifications() {
    return (
        <div className="flex bg-[#F8F8F8] min-h-screen">
            <Sidebar />
            <div className="flex-1 px-14 mt-16">
                <h1 className="text-3xl font-semibold">Notifications</h1>
                <div className="space-y-4 my-8">


                    <NotificationCard source={carListingIcon}
                        title="New Car Listing Submitted for review"
                        description="A seller has submitted a new car listing. Review and approve it to make it live on the platform."
                        time="12:30pm" />
                    <NotificationCard source={userRegisteredIcon}
                        title="New User Registered"
                        description="A new user has successfully registered on SheenCar."
                        time="12:30pm" />
                    <NotificationCard source={SellItForMeIcon}
                        title="New 'Buy It For Me' Request Submitted"
                        description="A user has requested assistance in finding and purchasing a car. Review the request and assign it to a dedicated agent."
                        time="12:30pm" />
                    <NotificationCard source={ButIfForMeIcon}
                        title="New 'Sell It For Me' Request Submitted"
                        description="A user has requested assistance in finding a buyer and selling a car. Review the request and assign it to a dedicated agent."
                        time="12:30pm" />
                    <NotificationCard source={NewSubscriptionIcon}
                        title="New Subscription Purchased"
                        description="A dealer has upgraded their subscription plan."
                        time="12:30pm" />

                </div>
            </div>
        </div>
    )
}