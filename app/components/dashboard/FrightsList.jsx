"use client"
import React, { useState } from "react";
import FrightsCard from "./FrightsCard";

const frightsData = [
  {
    plateNumber: "ABC123",
    date: "2023-10-01",
    temperature: 22,
    humidity: 55,
  },
  {
    plateNumber: "XYZ789",
    date: "2023-10-02",
    temperature: 18,
    humidity: 60,
  },
  {
    plateNumber: "LMN456",
    date: "2023-10-03",
    temperature: 20,
    humidity: 50,
  },
  {
    plateNumber: "DEF321",
    date: "2023-10-04",
    temperature: 25,
    humidity: 65,
  },
  {
    plateNumber: "GHI654",
    date: "2023-10-05",
    temperature: 19,
    humidity: 70,
  },
  {
    plateNumber: "JKL987",
    date: "2023-10-06",
    temperature: 21,
    humidity: 55,
  },
  {
    plateNumber: "MNO321",
    date: "2023-10-07",
    temperature: 23,
    humidity: 60,
  },
  {
    plateNumber: "PQR654",
    date: "2023-10-08",
    temperature: 24,
    humidity: 65,
  },
  {
    plateNumber: "STU987",
    date: "2023-10-09",
    temperature: 20,
    humidity: 50,
  },
  {
    plateNumber: "VWX321",
    date: "2023-10-10",
    temperature: 22,
    humidity: 55,
  },
  {
    plateNumber: "PQR654",
    date: "2023-10-08",
    temperature: 24,
    humidity: 65,
  },
  {
    plateNumber: "STU987",
    date: "2023-10-09",
    temperature: 20,
    humidity: 50,
  },
  {
    plateNumber: "VWX321",
    date: "2023-10-10",
    temperature: 22,
    humidity: 55,
  },
];

const FrightsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(frightsData.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const currentData = frightsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {currentData.map((fright, index) => (
          <FrightsCard
            key={index}
            plateNumber={fright.plateNumber}
            date={fright.date}
            temperature={fright.temperature}
            humidity={fright.humidity}
          />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FrightsList;