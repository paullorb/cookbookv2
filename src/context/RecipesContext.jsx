import React, { createContext, useState, useEffect } from "react";
import { createClient } from "contentful";

// Create a context
const RecipesContext = createContext();

// Create a component to wrap your app and provide the context
const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: "mwoz8j7lspjq",
      accessToken: "7d4TEO9tdvluAn_KIRYM_jcoyDImg9rZcuS4HxrGbuc",
    });

    const getRecipes = async () => {
      try {
        const entryItems = await client.getEntries();
        setRecipes(entryItems.items);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    getRecipes();
  }, []);

  return (
    <RecipesContext.Provider value={recipes}>
      {children}
    </RecipesContext.Provider>
  );
};

export { RecipesProvider, RecipesContext };
