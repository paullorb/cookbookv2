import { useEffect, useState } from "react";

function LatestRecipes() {
  const [latestRecipes, setLatestRecipes] = useState([1, 2]);



  useEffect(() => {

    const fetchAPI = () => {
      try {
        fetch("http://localhost:3000/AllRecipes")
          .then((response) => response.json())
          .then((data) => setLatestRecipes([2, 3]));
          console.log(latestRecipes)
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchAPI();
  }, []);

  return (
    <section>
      <h2>Latest Recipes</h2>
      <p>Coming soon...</p>
    </section>
  );
}
export default LatestRecipes;
