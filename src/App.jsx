/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import { createClient } from "contentful";
import { NavLink, Route, Routes } from "react-router-dom";
import NavCategory from "./components/NavCategory";
import AllRecipes from "./components/AllRecipes";
import Footer from "./components/Footer";

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
      <h1>Cookbookv2</h1>
      <br />

      <NavCategory />
      <Routes>
        <Route path="/AllRecipes" element={<AllRecipes />} />
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

