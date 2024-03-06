import { useContext, useEffect } from "react";
import style from "./Landing.module.css";
import { RecipesContext } from "../context/RecipesContext";
import Newsletter from "./Newsletter";
import LatestRecipes from "./LatestRecipes";
import { Link } from "react-router-dom";

function Landing() {
  const recipes = useContext(RecipesContext);

  const fetchAPI = () => {
    try {
      fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((data) => console.log(data));
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }};

    useEffect(() => {
      fetchAPI();
    } , []);

  const randomNumber =
    recipes.length > 0 ? Math.floor(Math.random() * recipes.length) : 0;
  const favRecipeTitle =
    recipes?.[randomNumber]?.fields?.recipeTitle || "Loading recipe title...";
  const favRecipePicture =
    recipes?.[randomNumber]?.fields?.recipePicture?.fields?.file?.url ||
    "Loading recipe picture...";
  const favRecipeDescription =
    recipes?.[randomNumber]?.fields?.description ||
    "Loading recipe description...";
  const favRecipeID =
    recipes?.[randomNumber]?.sys?.id || "Loading recipe id...";

  return (
    <>
      <section className={style.container}>
        <div className={style.imageContainer}>
          {favRecipePicture !== "Loading recipe picture..." ? (
            <a href="">
              <img src={favRecipePicture} alt="Featured recipe" />
            </a>
          ) : (
            <p>Loading recipe picture...</p> // Placeholder text or loading spinner
          )}
          <p>Featured recipe</p>
        </div>
        <div className={style.textContainer}>
          <h2>{favRecipeTitle}</h2>
          <p>{favRecipeDescription}</p>
          <Link to={`/AllRecipes/${favRecipeID}`}>View recipe</Link>
        </div>
      </section>
      <Newsletter />
      <LatestRecipes />
    </>
  );
}
export default Landing;