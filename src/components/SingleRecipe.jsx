import "../App.css";
import { useEffect, useState, useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function SingleRecipe() {
  const { id } = useParams();
  console.log("id:", id);

  let [singleRecipe, setsingleRecipe] = useState(["Loading recipes..."]);

  const fetchAPI = async () => {
    try {
      const response = await fetch(`http://localhost:3000/AllRecipes/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("transmitted data:", data);
      setsingleRecipe(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [id]);

  console.log("singleRecipe:", singleRecipe);

  return (
    <>
      <div className="AllCardsContainer">
        {singleRecipe.map((recipe) => (
          <>
            <div key={recipe.id} className="singleRecipeTitleCardContainer">
              <h1 className="siReCaTitle">{recipe.recipetitle}</h1>
              <div className="singleRecipeCardContainer">
                <div className="siReCaPicture">
                  <img
                    className="siReCaImg"
                    src={recipe.picture_url}
                    alt={recipe.recipetitle}
                  />
                </div>
                <div className="siReCaText">
                  <Tabs>
                    <TabList>
                      <Tab>Ingredients</Tab>
                      <Tab>Instructions</Tab>
                    </TabList>

                    <TabPanel className="siReCaTabPanel">
                      <p>{recipe.description}</p>
                    </TabPanel>
                    <TabPanel>
                      <p className="siReCaTabP">{recipe.instructions}</p>
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
