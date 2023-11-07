import React, { useEffect, useState } from "react";
import BookList from "../components/BookList";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import booksDataServices from "../services/books.services";
import { Link } from "react-router-dom";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    refreshbooks();
  }, []);
  // getting all books :
  function refreshbooks() {
    setIsLoading(true);
    booksDataServices
      .getAll()
      .then((resp) => {
        setIsLoading(false);
        setBooks(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
      
  }
  return (
    <div>
      <NavigationBar />
      <div className="container mx-auto py-8 px-8">
        <Link to="/addbook">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add A Book
          </button>
        </Link>
        {isLoading ? (
          "loading"
        ) : (
          <BookList
            data={books}
            refreshbooks={refreshbooks}
            setBooks={setBooks}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
