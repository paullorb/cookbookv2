/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import { createClient } from "contentful";
import { NavLink, Route, Routes } from "react-router-dom";
import NavCategory from "./components/NavCategory";
import AllRecipes from "./components/AllRecipes";

function App() {
  return (
    <>
      <h1>Cookbookv2</h1>
      <br />
      <NavCategory />
      <Routes>
        <Route path="/AllRecipes" element={<AllRecipes />} />
      </Routes>
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
