import { useEffect, useState } from "react";
import style from "./LatestRecipes.module.css";

function LatestRecipes() {
  const [allRecipes, setAllRecipes] = useState(["Loading recipes..."]);

  const fetchAPI = () => {
    try {
      fetch("http://localhost:3000/AllRecipes")
        .then((response) => response.json())
        .then((data) => {
          setAllRecipes(data);
          // console.log(data);
        })
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <section>
      <div className={style.title}>
        <h2>Latest Recipes</h2>
      </div>
      <div className={style.container}>
      {allRecipes.slice(-3).map((recipe) => (
        <div key={recipe.id} className={style.recipe}>
          <div className={style.textContainer}>
            <h3 className={style.heading}>{recipe.recipetitle}</h3>
          </div>
          <div className={style.textContainer}>
            <p className={style.description}>{recipe.description}</p>
          </div>
          <div className={style.textContainer}>
            <p className={style.category}>{recipe.category}</p>
          </div>
          <img src={recipe.picture_url} alt={recipe.recipetitle} className={style.img}/>
        </div>
))}
      </div>

    </section>
  );
}
export default LatestRecipes;
