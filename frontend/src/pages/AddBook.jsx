import React, { useState } from "react";
import booksDataServices from "../services/books.services";
import { Link, useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const saveBook = (e) => {
    e.preventDefault();

    if (!title || !author || !publishYear || !price) {
      setError("Please fill in all fields.");
      return;
    }

    const book = { title, author, publishYear, price };
    console.log(book);

    booksDataServices
      .create(book)
      .then((resp) => {
        navigate("/");
      })
      .catch((err) => {
        setError("An error occurred while saving the book.");
        console.log(err);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-1/2 p-4">
          <div className="bg-white p-4">
            <form>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Enter the book title"
                  name="title"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="author">
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  placeholder="Enter the author name"
                  name="author"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="publishYear">
                  Publish Year
                </label>
                <input
                  type="number"
                  id="publishYear"
                  placeholder="Enter the book publish Year"
                  name="publishYear"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  onChange={(e) => setPublishYear(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="price">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  placeholder="Enter the price"
                  name="price"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              {error && <div className="text-red-500 mb-4">{error}</div>}
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                onClick={saveBook}
              >
                Save book
              </button>
              <Link to="/" className="bg-red-500 text-white px-4 py-2 rounded">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
