import React from "react";
import CostumeButton from "./CostumeButton";

const BookCard = ({ title, author, publishYear, price }) => {
  return (
    <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <div className="flex justify-center items-center bg-gray-200"></div>
      <div className="p-5">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Author: {author}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Publish Year: {publishYear}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Price: ${price}
        </p>
        <CostumeButton text={"see ditales"} />
      </div>
    </div>
  );
};

export default BookCard;
