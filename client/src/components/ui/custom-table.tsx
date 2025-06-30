import React from "react";

interface Column {
  header: string;
  accessor: string;
  render?: (value: any) => React.ReactNode;
}

interface CustomTableProps {
  columns: Column[];
  data: any[];
  headerBgColor?: string;
  headerTextColor?: string;
}

export function CustomTable({
  columns,
  data,
  headerBgColor = "bg-[#003A2F]",
  headerTextColor = "text-white",
}: CustomTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr className={`${headerBgColor} ${headerTextColor}`}>
              {columns.map((column, index) => (
                <th
                  key={column.accessor}
                  className={`text-left py-4 px-6 font-medium md:font-bold text-xs md:text-lg leading-none tracking-normal font-['Poppins'] border-r border-teal-700 ${index === columns.length - 1 ? "last:border-r-0" : ""
                    }`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-b border-gray-200 ${rowIndex === data.length - 1 ? "" : "border-b"
                  }`}
              >
                {columns.map((column, colIndex) => { 
                   const textAlignClass =
                colIndex === 0 ? "text-left" : "text-center";
                return(       <td
                  key={`${rowIndex}-${column.accessor}`}
                  className={`py-4 px-6 border-r last:border-r-0 border-gray-200 font-['Poppins'] font-normal text-[10px] md:text-base leading-none tracking-normal ${colIndex === 0 ? "font-medium text-gray-900" : ""
                    } ${textAlignClass}`}

                >
                  {column.render
                    ? column.render(row[column.accessor])
                    : row[column.accessor]}
                </td>
                )})}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 