/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import { createClient } from "contentful";
import Navbar from "./components/Navbar";
import { NavLink, Route, Routes } from "react-router-dom";
import NavCategory from "./components/NavCategory";
import AllRecipes from "./components/AllRecipes";
import Footer from "./components/Footer";
import Searched from "./components/Searched";

function App() {
  const [recipes, setRecipes] = useState([]);

  const client = createClient({
    space: "mwoz8j7lspjq",
    accessToken: "7d4TEO9tdvluAn_KIRYM_jcoyDImg9rZcuS4HxrGbuc",
  });

  useEffect(() => {
    const getRecipes = async () => {
      const entryItems = await client.getEntries();
      setRecipes(entryItems.items);
      console.log(entryItems.items);
    };

    getRecipes();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Cookbookv2</h1>
      <br />
      <NavCategory />
      <Routes>
        <Route path="/AllRecipes" element={<AllRecipes />} />
        <Route path="/Searched/:search" element={<Searched />} />
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
