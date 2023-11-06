import React, { useEffect, useState } from "react";
import BookList from "../components/BookList";
import Hero from "../components/Hero";
import axios from "axios";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/api/book")
      .then((response) => {
        setBooks(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <Hero />
      <div className="container mx-auto py-8">
        <BookList data={books} />
      </div>
    </div>
  );
};

export default Home;
