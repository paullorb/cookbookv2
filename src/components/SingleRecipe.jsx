import "../App.css";
import { useEffect, useState, useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function SingleRecipe() {
  const { id } = useParams();
  console.log(id);
  const recipes = useContext(RecipesContext);
  const singleRecipe = recipes.filter((recipe) => recipe.sys.id === id);

  console.log(singleRecipe);

  return (
    <>
      <div className="AllCardsContainer">
        {singleRecipe.map((recipe) => (
          <>
            <div key={recipe.sys.id} className="singleRecipeTitleCardContainer">
              <h1 className="siReCaTitle">{recipe.fields.recipeTitle}</h1>
              <div className="singleRecipeCardContainer">
                <div className="siReCaPicture">
                  <img
                    className="siReCaImg"
                    src={recipe.fields.recipePicture.fields.file.url}
                    alt={recipe.fields.recipePicture.fields.file.fileName}
                  />
                </div>
                <div className="siReCaText">
                  <Tabs>
                    <TabList>
                      <Tab>Ingredients</Tab>
                      <Tab>Instructions</Tab>
                    </TabList>

                    <TabPanel className="siReCaTabPanel">
                      <ul>
                        {recipe.fields.ingredients.map((ingredient) => (
                          <li>{ingredient}</li>
                        ))}
                      </ul>
                    </TabPanel>
                    <TabPanel>
                      <p className="siReCaTabP">{recipe.fields.instruction}</p>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default SingleRecipe;
