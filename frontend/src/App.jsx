import React from 'react'
import { Route , Routes } from 'react-router-dom'
import NavigationBar from "./components/NavigationBar"
import Home from './pages/Home'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <NavigationBar />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App