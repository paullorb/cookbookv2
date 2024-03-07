/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import "../App.css";
import { createClient } from "contentful";
import { NavLink, Link } from "react-router-dom";
import NavCategory from "./NavCategory";
import { RecipesContext } from "../context/RecipesContext";

function Lunch() {
  let [LunchRecipes, setLunchRecipes] = useState(["Loading recipes..."]);

  const fetchAPI = () => {
    try {
      fetch("http://localhost:3000/Lunch")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setLunchRecipes(data);
        });
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const myColors = ["#bed0e8", "#e5e8be", "#e8c1be", "#bee8d6", "#d6bee8"];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * myColors.length);
    return myColors[randomIndex];
  };

  return (
    <>
      <div className="AllCardsContainer">
        {LunchRecipes.map((recipe) => (
          <Link to={`/AllRecipes/${recipe.id}`}>
            <div
              key={recipe.id}
              className="CardContainer"
              style={{ backgroundColor: getRandomColor() }}
            >
              <div className="CardHeader">
                <img
                  className="CardHeaderImg"
                  src={recipe.picture_url}
                  alt={recipe.recipetitle}
                />
                <div className="CardText">
                  <h3 className="CardHeaderTitle">{recipe.recipetitle}</h3>
                  <p className="CardTextP">{recipe.description}</p>
                  <div className="CardTextInfo">
                    <p className={`CardCatBox${recipe.category}`}>
                      {recipe.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Lunch;
