/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { NavLink, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavCategory from "./components/NavCategory";
import AllRecipes from "./components/AllRecipes";
import Footer from "./components/Footer";
import Searched from "./components/Searched";
import Landing from "./components/Landing";
import "./App.css";
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import Dinner from "./components/Dinner";
import Desserts from "./components/Desserts";
import SingleRecipe from "./components/SingleRecipe";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Navbar />

      <NavCategory />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/AllRecipes/searched/:query" element={<Searched />} />
        <Route path="/AllRecipes" element={<AllRecipes />} />
        <Route path="/AllRecipes/:id" element={<SingleRecipe />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Breakfast" element={<Breakfast />} />
        <Route path="/Lunch" element={<Lunch />} />
        <Route path="/Dinner" element={<Dinner />} />
        <Route path="/Dessert" element={<Desserts />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

// TO DO
//_________________________________________
//                                         |
// we need prep time for recipes           |
// remove alternative names from title     |
// add description                         |
// format instructions and ingredients     |
//_________________________________________|
