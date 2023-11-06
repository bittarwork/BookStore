import React from "react";
import BookCard from "./BookCard";
const BookList = ({ data }) => {
  return (
    <div>
      {data.map((book) => {
        const { title, author, publishYear, price } = book;
       return (
         <div>
           {data.map((book) => (
             <BookCard
               key={book.id} // Use a unique identifier from the book object as the key
               title={book.title}
               author={book.author}
               publishYear={book.publishYear}
               price={book.price}
               image={book.image}
             />
           ))}
         </div>
       );
      })}
    </div>
  );
};

export default BookList;
