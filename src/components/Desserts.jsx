/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import "../App.css";
import { createClient } from "contentful";
import { NavLink } from "react-router-dom";
import NavCategory from "./NavCategory";
import { RecipesContext } from "../context/RecipesContext";

function Desserts() {
  const recipes = useContext(RecipesContext);
  const DessertsRecipes = recipes.filter(
    (recipe) => recipe.fields.category === "Dessert"
  );

  return (
    <>
      <div className="AllCardsContainer">
        {DessertsRecipes.map((recipe) => (
          <div key={recipe.sys.id} className="CardContainer">
            <div className="CardHeader">
              <img
                className="CardHeaderImg"
                src={recipe.fields.recipePicture.fields.file.url}
                alt={recipe.fields.recipePicture.fields.file.fileName}
              />
              <div className="CardText">
                <h3 className="CardHeaderTitle">{recipe.fields.recipeTitle}</h3>
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
        ))}
      </div>
    </>
  );
}

export default Desserts;
