import React from "react";


const BookList = ({ data }) => {
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
          <tr key={book.id}>
            <td className="border px-4 py-2">{book.title}</td>
            <td className="border px-4 py-2">{book.author}</td>
            <td className="border px-4 py-2">{book.publishYear}</td>
            <td className="border px-4 py-2">{book.price}</td>
            <td className="border px-4 py-2"></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
