import { useEffect } from "react";

function LatestRecipes() {
  const fetchAPI = () => {
    try {
      fetch("http://localhost:3000")
        .then((response) => response.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
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
