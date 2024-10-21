"use client";
import React, { useMemo, useState, useEffect } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import axios from "axios";
import Image from "next/image";
import AddIcon from "@/public/images/addIcon.svg"; // Update the path to your AddIcon
import AddCompanyPopup from "./AddCompanyPopup"; // Import the popup component

const CompanyTable = () => {
  const columnHelper = createColumnHelper();

  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: "#",
      }),
      columnHelper.accessor("companyName", {
        header: "Company Name",
      }),
      columnHelper.accessor("country", {
        header: "Country",
      }),
      columnHelper.accessor("email", {
        header: "Email",
      }),
      columnHelper.accessor("address", {
        header: "Address",
      }),
    ],
    [columnHelper]
  );

  const [data, setData] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    address: "",
    email: "",
    country: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://192.168.121.51:4000/getAllCompanyList"
        );
        setData(response.data);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddCompanyClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.121.51:4000/addCompany",
        formData
      );
      setData((prevData) => [...prevData, response.data]);
      setIsPopupOpen(false);
    } catch (error) {
      setError("Error adding company");
      console.error("Error adding company:", error);
    }
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={handleAddCompanyClick}>
        <Image src={AddIcon} alt="Add Icon" />
        <p className="text-[#074bd8] text-base font-medium font-['Inter'] underline">
          Add a Company
        </p>
      </div>

      {isPopupOpen && (
        <AddCompanyPopup
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleClosePopup={handleClosePopup}
        />
      )}

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="flex justify-between w-full">
          <table className="w-full">
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
      )}
    </>
  );
};

export default CompanyTable;
