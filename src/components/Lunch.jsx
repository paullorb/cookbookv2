/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import "../App.css";
import { createClient } from "contentful";
import { NavLink, Link } from "react-router-dom";
import NavCategory from "./NavCategory";
import { RecipesContext } from "../context/RecipesContext";

function Lunch() {
  const recipes = useContext(RecipesContext);
  const LunchRecipes = recipes.filter(
    (recipe) => recipe.fields.category === "Lunch"
  );

  const myColors = ["#bed0e8", "#e5e8be", "#e8c1be", "#bee8d6", "#d6bee8"];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * myColors.length);
    return myColors[randomIndex];
  };

  return (
    <>
      <div className="AllCardsContainer">
        {LunchRecipes.map((recipe) => (
          <Link to={`/AllRecipes/${recipe.sys.id}`}>
            <div
              key={recipe.sys.id}
              className="CardContainer"
              style={{ backgroundColor: getRandomColor() }}
            >
              <div className="CardHeader">
                <img
                  className="CardHeaderImg"
                  src={recipe.fields.recipePicture.fields.file.url}
                  alt={recipe.fields.recipePicture.fields.file.fileName}
                />
                <div className="CardText">
                  <h3 className="CardHeaderTitle">
                    {recipe.fields.recipeTitle}
                  </h3>
                  <p className="CardTextP">{recipe.fields.description}</p>
                  <div className="CardTextInfo">
                    <div className="PrepTimeContainer">
                      <img
                        src="timerbg.png"
                        style={{ height: "2rem", width: "auto" }}
                      />
                      <h5 className="CardTextPrepTime">
                        {recipe.fields.prepTime}
                      </h5>
                    </div>
                    <p className={`CardCatBox${recipe.fields.category}`}>
                      {recipe.fields.category}
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
