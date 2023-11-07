import React, { useState, useEffect } from "react";
import booksDataServices from "../services/books.services";
import { useParams, useNavigate } from "react-router-dom";

const EdeitBook = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    booksDataServices
      .get(id)
      .then((resp) => {
        setTitle(resp.data.title);
        setAuthor(resp.data.author);
        setPublishYear(resp.data.publishYear);
        setPrice(resp.data.price);
        console.log({ title, author, publishYear, price });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let navigate = useNavigate();

  const editBook = (e) => {
    e.preventDefault();
    const book = { title, author, publishYear, price };
    if (id) {
      booksDataServices
        .update(id, book)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-1/2 p-4">
          <div className="bg-white p-4">
            <h2 className="text-2xl font-bold mb-4">Edit Book</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="title" className="block mb-2 font-bold">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Enter the book title"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="author" className="block mb-2 font-bold">
                  Author:
                </label>
                <input
                  type="text"
                  id="author"
                  placeholder="Enter the author name"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="publishYear" className="block mb-2 font-bold">
                  Publish Year:
                </label>
                <input
                  type="text"
                  id="publishYear"
                  placeholder="Enter the book publish Year"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  value={publishYear}
                  onChange={(e) => setPublishYear(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="price" className="block mb-2 font-bold">
                  Price:
                </label>
                <input
                  type="text"
                  id="price"
                  placeholder="Enter the price"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                onClick={editBook}
              >
                Save Changes
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdeitBook;
