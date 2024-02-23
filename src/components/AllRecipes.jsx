/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "../App.css";
import { createClient } from "contentful";
import { NavLink } from "react-router-dom";
import NavCategory from "./NavCategory";

function AllRecipes() {
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
      <div className="AllCardsContainer">
        {recipes.map((recipe) => (
          <div key={recipe.sys.id} className="CardContainer">
            <div className="CardHeader">
              <img
                className="CardHeaderImg"
                src={recipe.fields.recipePicture.fields.file.url}
                alt={recipe.fields.recipePicture.fields.file.fileName}
              />
              <div className="CardText">
                <h3 className="CardHeaderTitle">{recipe.fields.recipeTitle}</h3>
                <p>Description</p>
                <div className="CardTextInfo">
                  <h5>PrepTime</h5>
                  <h5>{recipe.fields.category}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllRecipes;

// TO DO
//_________________________________________
//                                         |
// we need prep time for recipes           |
// remove alternative names from title     |
// add description                         |
// format instructions and ingredients     |
//_________________________________________|
