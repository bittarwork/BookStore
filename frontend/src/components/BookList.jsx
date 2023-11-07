import React from "react";
import { Link } from "react-router-dom";
import booksDataServices from "../services/books.services";
const BookList = ({ data, setBooks, refreshbooks }) => {
  const DeleteBook = (id) => {
    booksDataServices
      .delete(id)
      .then((resp) => {
        refreshbooks(() => {
          setBooks();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Author</th>
          <th className="px-4 py-2">Publish Year</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">edit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((book) => (
          <tr key={book._id}>
            <td className="border px-4 py-2">{book.title}</td>
            <td className="border px-4 py-2">{book.author}</td>
            <td className="border px-4 py-2">{book.publishYear}</td>
            <td className="border px-4 py-2">{book.price}</td>
            <td className="border px-4 py-2">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Ditales
              </button>
              <Link to={`/book/${book._id}`}>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Details
                </button>
              </Link>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={() => {
                  DeleteBook(book._id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
