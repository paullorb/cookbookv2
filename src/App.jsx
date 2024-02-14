/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './App.css';
import { createClient} from 'contentful';

function App() {

  const [recipes, setRecipes] = useState([]);

  const client = createClient({
    space: "mwoz8j7lspjq",
    accessToken: "7d4TEO9tdvluAn_KIRYM_jcoyDImg9rZcuS4HxrGbuc"
  });

  useEffect (() => {
    const getRecipes = async () => {
      const entryItems = await client.getEntries()
      setRecipes(entryItems.items)
      console.log(entryItems.items)
    }

    getRecipes();

  }, [])
  return (
    <>
      <h1>Cookbookv2</h1>
      <br />
      {recipes.map((recipe) => (
        <div key={recipe.sys.id}>
          <h1>{recipe.fields.recipeTitle}</h1>
          <img 
          style={{width: "200px", height: "200px"}}
          src={recipe.fields.recipePicture.fields.file.url} 
          alt={recipe.fields.recipePicture.fields.file.fileName}
          />
          {recipe.fields.ingredients.map((el, index) => (
            <ul key={index}>
              <li>{el}</li>
            </ul>
          ))}

        </div>
      ))}
    </>
  )
}

export default App
