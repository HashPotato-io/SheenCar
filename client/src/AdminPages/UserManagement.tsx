import { ColumnDef } from "@tanstack/react-table";
import { CustomTable } from "@/components/AdminComponents/Table";
import dummyProfile from "../assets/dummyProfile.svg"
import Sidebar from "@/components/AdminComponents/Sidebar";
import { Drawer } from "@/components/AdminComponents/DrawerModal";
import { useState } from "react";
type User = {
    name: string;
    carsListed: number;
    memberSince: string;
    email: string;
    phoneNumber: string;
    profilePic: string;
};

const users: User[] = [
    { profilePic: dummyProfile, carsListed: 12, memberSince: "12/12/12", name: "Alice", email: "alice@example.com", phoneNumber: "03213232333" },
    { profilePic: dummyProfile, carsListed: 12, memberSince: "12/12/12", name: "Bob", email: "bob@example.com", phoneNumber: "03213232333" },
    { profilePic: dummyProfile, carsListed: 12, memberSince: "12/12/12", name: "Alice", email: "alice@example.com", phoneNumber: "03213232333" },
    { profilePic: dummyProfile, carsListed: 12, memberSince: "12/12/12", name: "Bob", email: "bob@example.com", phoneNumber: "03213232333" },
    { profilePic: dummyProfile, carsListed: 12, memberSince: "12/12/12", name: "Alice", email: "alice@example.com", phoneNumber: "03213232333" },
    { profilePic: dummyProfile, carsListed: 12, memberSince: "12/12/12", name: "Bob", email: "bob@example.com", phoneNumber: "03213232333" },
    { profilePic: dummyProfile, carsListed: 12, memberSince: "12/12/12", name: "Alice", email: "alice@example.com", phoneNumber: "03213232333" },
    { profilePic: dummyProfile, carsListed: 12, memberSince: "12/12/12", name: "Bob", email: "bob@example.com", phoneNumber: "03213232333" },
];

const userColumns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "carsListed",
        header: "Cars Listed"
    },
    {
        accessorKey: "memberSince",
        header: "Member Since"
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phoneNumber",
        header: "Phone Number",
    },
];

export default function UserTablePage() {
    const handleAction = (row: any) => {
        alert(`Clicked action for ${row.original.name}`);
    };

    const [deleteModal, setDeleteModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <div className="p-8 bg-[#F8F8F8] flex-1">
                <h1 className=" text-3xl font-semibold mt-10 mb-4">
                    User Management
                </h1>
                {/* fliters */}
                <section className="flex items-center rounded-lg shadow-md justify-between mb-4 py-6 px-14 bg-white focus:outline-none">

                    <select
                        className="border rounded-md px-12 border-[#171616] py-1 cursor-pointer"
                        onChange={(e) => {
                            console.log("Dropdown 1 selected:", e.target.value);
                        }}
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Date Joined
                        </option>
                        <option value="option1a">Newest First</option>
                        <option value="option1b">Oldest First</option>
                    </select>

                    <select
                        className="border rounded-md border-[#171616] px-12 py-1 cursor-pointer focus:outline-none "
                        onChange={(e) => {
                            console.log("Dropdown 2 selected:", e.target.value);
                        }}
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Last Active Date
                        </option>
                        <option value="option2a">Oldest to Newest</option>
                        <option value="option2b">Newest to Oldest</option>
                    </select>


                    <button
                        onClick={() => {
                            console.log("Button clicked");
                        }}
                        className="bg-[#003A2F] text-white px-20 py-1 rounded-md transition"
                    >
                        Search
                    </button>
                </section>

                <CustomTable
                    heading="All Users"
                    data={users}
                    columns={userColumns}
                    showImageColumn={true}
                    getImage={(user) => user.profilePic}
                    actions={[
                        {
                            label: "View",
                            onClick: (row) => console.log("Viewing", row.original),
                        },
                        {
                            label: "Delete",
                            onClick: (row) => {
                                setSelectedUser(row.original);
                                setDeleteModal(true);
                            },
                            variant: "danger",
                        },
                    ]}
                />
            </div>
            <Drawer
                title="Delete User?"
                isOpen={deleteModal}
                onClose={() => setDeleteModal(false)}
            >
                {selectedUser && (
                    <>
                    <div className="flex flex-col items-center mt-10 mb-4">
                        <img
                            src={selectedUser.profilePic}
                            alt={selectedUser.name}
                            className="w-20 h-20 rounded-full mb-4 object-cover"
                        />
                        <p className="text-lg font-semibold">{selectedUser.name}</p>
                        </div>
                        <p className="px-2 text-center">
                            Are you sure you want to delete this user? This action will be permanent and cannot be reversed.
                        </p>
                        <button
                            className="bg-[#761B1C] text-white mt-6 px-4 py-2 w-full rounded"
                            onClick={() => {
                                console.log("Deleting user:", selectedUser);
                                setDeleteModal(false);
                                setSelectedUser(null);
                            }}
                        >
                            Delete
                        </button>
                    </>
                )}
            </Drawer>

        </div>
    );
}
