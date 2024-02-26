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

function App() {
  // const [recipes, setRecipes] = useState([]);

  // const client = createClient({
  //   space: "mwoz8j7lspjq",
  //   accessToken: "7d4TEO9tdvluAn_KIRYM_jcoyDImg9rZcuS4HxrGbuc",
  // });

  // useEffect(() => {
  //   const getRecipes = async () => {
  //     const entryItems = await client.getEntries();
  //     setRecipes(entryItems.items);
  //     console.log(entryItems.items);
  //   };

  //   getRecipes();
  // }, []);

  return (
    <>
      <Navbar />

      <NavCategory />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="AllRecipes" element={<AllRecipes />} />
        <Route path="/Searched/:query" element={<Searched />} />
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
