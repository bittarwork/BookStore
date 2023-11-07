import React, { useEffect, useState } from "react";
import BookList from "../components/BookList";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer"
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
      <NavigationBar/>
      <div className="container mx-auto py-8 px-8">
        <BookList data={books} />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
