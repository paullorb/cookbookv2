import { useState, useEffect } from "react";
import style from './Favorite.module.css';
import { createClient } from "contentful";

export default function Landing() {
  const [recipes, setRecipes] = useState([]);
  const [favoriteRecipeTitle, setFavoriteTitle] = useState("");

  const favorite_image = "/image_test.png";
  const favorite_url = "/recipe";
  const allRecipes = [];

  const client = createClient({
    space: "mwoz8j7lspjq",
    accessToken: "7d4TEO9tdvluAn_KIRYM_jcoyDImg9rZcuS4HxrGbuc",
  });

  const randomNumber = Math.floor(Math.random() * 19);
  

  useEffect(() => {
    const fetchFavorite = async () => {
      try {
        const response = await client.getEntries({
          content_type: "recipes",
        });
        setRecipes(response.items);
        console.log(response.items);
      } catch (error) {
        console.error("Error searching Contentful:", error);
      }
    };
  } 
  , [client]);



  return (
    <section className={style.container}>
      <div className={style.imageContainer}>
      <a href={favorite_url}><img src={favorite_image}/>
      <p>Featured recipe</p></a>
      </div>
      <div className={style.textContainer}>
        <h1>Favorite recipe</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ut magni, error labore non temporibus saepe amet sint sapiente sunt tenetur quis. Quis, natus? Mollitia eaque cupiditate repellendus ipsam deserunt.</p>
        <button>View recipe</button>
      </div>
    </section>
  );
}