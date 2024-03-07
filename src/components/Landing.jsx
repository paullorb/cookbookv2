import { useContext, useEffect, useState } from "react";
import style from "./Landing.module.css";
import { RecipesContext } from "../context/RecipesContext";
import Newsletter from "./Newsletter";
import LatestRecipes from "./LatestRecipes";
import { Link } from "react-router-dom";

function Landing() {
  let [RandomRec, setRandomRec] = useState("Loading recipe title...");
  useEffect(() => {
    const fetchAPI = () => {
      try {
        fetch("http://localhost:3000")
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            setRandomRec(data);
          });
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchAPI();
  }, []);

  const NEWfavRecipeTitle = RandomRec?.recipetitle || "Loading";
  const NEWfavRecipePicture = RandomRec?.picture_url || "Loading";
  const NEWfavRecipeDescription = RandomRec?.description || "Loading";
  const NEWfavRecipeID = RandomRec?.id || "Loading";

  console.log(NEWfavRecipePicture);

  return (
    <>
      <section className={style.container}>
        <div className={style.imageContainer}>
          <img src={NEWfavRecipePicture} alt="Featured recipe" />
          <p>Featured recipe</p>
        </div>
        <div className={style.textContainer}>
          <h2>{NEWfavRecipeTitle}</h2>
          <p>{NEWfavRecipeDescription}</p>
          <Link to={`/AllRecipes/${NEWfavRecipeID}`}>View recipe</Link>
        </div>
      </section>
      <Newsletter />
      <LatestRecipes />
    </>
  );
}
export default Landing;
