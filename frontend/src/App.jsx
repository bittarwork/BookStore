import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddBook from "./pages/AddBook"
import DeleteBook from "./pages/DeleteBook";
import EdeitBook from "./pages/EdeitBook";

const App = () => {
  return (
    <Routes>
      <Route path="/addbook" element={<AddBook/>} />
      <Route path="/DeleteBook" element={<DeleteBook/>} />
      <Route path="/EdeitBook" element={<EdeitBook/>} />
      <Route path="" element={<Home/>} />
    </Routes>
  );
}

export default App