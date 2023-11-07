import React, { useState, useEffect } from "react";
import booksDataServices from "../services/books.services";
import { useParams, useNavigate } from "react-router-dom";
const BookInformation = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [price, setPrice] = useState("");

  let navigate = useNavigate();
  useEffect(() => {
    booksDataServices
      .get(id)
      .then((resp) => {
        setTitle(resp.data.title);
        setAuthor(resp.data.author);
        setPublishYear(resp.data.publishYear);
        setPrice(resp.data.price);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-1/2 p-4">
          <div className="bg-white p-4">
            <h2 className="text-2xl font-bold mb-4">Book Information</h2>
            <div className="mb-4">
              <label className="block mb-2 font-bold">Title:</label>
              <p>{title}</p>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold">Author:</label>
              <p>{author}</p>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold">Publish Year:</label>
              <p>{publishYear}</p>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold">Price:</label>
              <p>{price}</p>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => navigate("/")}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );;
};

export default BookInformation;
