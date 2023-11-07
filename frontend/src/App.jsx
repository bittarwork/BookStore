import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddBook from "./pages/AddBook"
import EdeitBook from "./pages/EdeitBook";
import BookInformation from './pages/BookInformation';

const App = () => {
  return (
    <Routes>
      <Route path="/addbook" element={<AddBook />} />
      <Route path="/EdeitBook" element={<EdeitBook />} />
      <Route path="/book/:id" element={<BookInformation />} />
      <Route path="" element={<Home />} />
    </Routes>
  );
}

export default App