/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import "../App.css";
import { createClient } from "contentful";
import { NavLink, Link } from "react-router-dom";
import NavCategory from "./NavCategory";
import { RecipesContext } from "../context/RecipesContext";

function AllRecipes() {
  const recipes = useContext(RecipesContext);

  return (
    <>
      <div className="AllCardsContainer">
        {recipes.map((recipe) => (
          <Link key={recipe.sys.id} to={`/AllRecipes/${recipe.sys.id}`}>
            <div key={recipe.sys.id} className="CardContainer">
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
      {/* <p>test</p> */}
    </>
  );
}

export default AllRecipes;

// TO DO
//_________________________________________
//                                         |
// we need prep time for recipes          ✓|
// remove alternative names from title    ✓|
// add description                        ✓|
// format instructions and ingredients    ✓|
// set up useContext                       |
// set up useParams                        |
// set up Single Recipes                   |
//_________________________________________|
