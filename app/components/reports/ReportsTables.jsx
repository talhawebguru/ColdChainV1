"use client";
import React, { useMemo, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const defaultData = [
  {
    id: "1",
    vehicle: 402789,
    company: "Bin Ali Medical",
    branch: "Main Branch",
    date: "24/09/2024 16:40",
    temperature: "35.9 °c",
    humidity: "45%",
  },
  {
    id: "2",
    vehicle: 402789,
    company: "Bin Ali Medical",
    branch: "Main Branch",
    date: "24/09/2024 16:40",
    temperature: "45.7 °c",
    humidity: "37.8%",
  },
  {
    id: "3",
    vehicle: 402789,
    company: "Bin Ali Medical",
    branch: "Branch 24",
    date: "24/09/2024 16:40",
    temperature: "34.9 °c",
    humidity: "29%",
  },
  {
    id: "4",
    vehicle: 402789,
    company: "Bin Ali Medical",
    branch: "Branch 24",
    date: "24/09/2024 16:40",
    temperature: "34.9 °c",
    humidity: "29%",
  },
];

const ReportsTables = () => {
  const columnHelper = createColumnHelper();

  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: "#",
      }),
      columnHelper.accessor("vehicle", {
        header: "Vehicle No.",
      }),
      columnHelper.accessor("company", {
        header: "Company",
      }),
      columnHelper.accessor("branch", {
        header: "Branch",
      }),
      columnHelper.accessor("date", {
        header: "Date & Time",
      }),
      columnHelper.accessor("temperature", {
        header: "Temperature",
      }),
      columnHelper.accessor("humidity", {
        header: "Humidity",
      }),
    ],
    [columnHelper]
  );

  const [data, setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex justify-between w-full ">
      <table className="w-full ">
        <thead className="bg-[#084cd8]/10 shadow">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="pt-9 pb-4 px-3 text-center text-[#232323] text-lg font-medium font-['Inter']"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="pt-9 pb-4 text-center text-[#232323] text-base font-normal font-['Inter'] capitalize"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default ReportsTables;
