import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
    ColumnDef,
    Row,
} from "@tanstack/react-table";
import { useState } from "react";
import back from "../../assets/back.svg"
import doubleBack from "../../assets/doubleBack.svg"
import forward from "../../assets/forward.svg"
import doubleForward from "../../assets/doubleforward.svg"
interface Action<T> {
    label: string;
    onClick: (row: Row<T>) => void;
    variant?: "primary" | "danger";
}

interface CustomTableProps<T> {
    data: T[];
    columns: ColumnDef<T, any>[];
    actions?: Action<T>[];
    onRowAction?: (row: Row<T>) => void;
    actionLabel?: string;
    heading: string;
    showImageColumn?: boolean;
    getImage?: (row: T) => string;
    pageSize?: number;
}

export function CustomTable<T>({
    data,
    columns,
    onRowAction,
    actionLabel = "Action",
    heading,
    actions = [],
    showImageColumn = false,
    getImage,
    pageSize = 5,
}: CustomTableProps<T>) {
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize,
    });

    const table = useReactTable({
        data,
        columns,
        pageCount: Math.ceil(data.length / pagination.pageSize),
        state: {
            pagination,
        },
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        manualPagination: false,
    });

    return (
        <div className="overflow-x-auto bg-white shadow-md px-8 rounded-lg">
            <h1 className="text-xl my-6 font-bold px-2">{heading}</h1>
            <table className="min-w-full text-sm text-left">
                <thead className="border-t border-[#EEEEEE]">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {showImageColumn && <th className="px-4 py-4"></th>}
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="px-4 py-4 font-medium text-sm text-[#757575]"
                                >
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                            {(onRowAction || actions.length > 0) && (
                                <th className="px-4 py-4 font-medium text-sm text-[#757575]">Actions</th>
                            )}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="border-t border-[#EEEEEE] text-sm last:border-b">
                            {showImageColumn && getImage && (
                                <td className="py-4">
                                    <img
                                        src={getImage(row.original)}
                                        alt="avatar"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                </td>
                            )}
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="px-4 py-4 text-[#292D32] text-sm font-medium">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                            {(onRowAction || actions.length > 0) && (
                                <td className="px-4 py-4 text-sm font-medium space-x-2">
                                    {actions.map((action, index) => (
                                        <button
                                            key={index}
                                            onClick={() => action.onClick(row)}
                                            className={`text-sm ${action.variant === "danger"
                                                    ? "text-[#B40000] hover:underline"
                                                    : "text-[#174FDE] hover:underline"
                                                }`}
                                        >
                                            {action.label}
                                        </button>
                                    ))}
                                    {onRowAction && !actions.length && (
                                        <button
                                            onClick={() => onRowAction(row)}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {actionLabel}
                                        </button>
                                    )}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>


            <div className="flex justify-end items-center my-10 mr-6 text-sm space-x-2">
                <button
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                    className="px-2 py-1 border rounded disabled:cursor-not-allowed bg-[#003A2F]"
                    title="First Page"
                >
                    <img src={forward} alt="back" className="w-3 h-5" />
                </button>
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="px-2 py-1 border rounded disabled:cursor-not-allowed bg-[#003A2F]"
                    title="Previous Page"
                >
                    <img src={doubleForward} alt="forward" className="w-3 h-5 py-1 " />
                </button>



                {Array.from({ length: table.getPageCount() }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => table.setPageIndex(index)}
                        className={`px-3 py-1 rounded border ${table.getState().pagination.pageIndex === index
                                ? "bg-[#003A2F] text-white"
                                : "hover:bg-gray-100 bg-[#EBEBEB] text-black"
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="px-2 py-1 border rounded disabled:cursor-not-allowed bg-[#003A2F]"
                    title="Next Page"
                >
                    <img src={back} alt="back" className="w-3 h-5 py-1" />
                </button>


                <button
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                    className="px-2 py-1 border rounded disabled:cursor-not-allowed bg-[#003A2F]"
                    title="Last Page"

                >
                    <img src={doubleBack} alt="back" className="w-3 h-5" />
                </button>
            </div>


        </div>
    );
}
