import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";
import "../App.css";
import { NavLink, Link } from "react-router-dom";

const Searched = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const client = createClient({
    space: "mwoz8j7lspjq",
    accessToken: "7d4TEO9tdvluAn_KIRYM_jcoyDImg9rZcuS4HxrGbuc",
  });

  const myColors = ["#bed0e8", "#e5e8be", "#e8c1be", "#bee8d6", "#d6bee8"];

  const getRandomColor = (() => {
    const randomIndex = Math.floor(Math.random() * myColors.length);
    const randomColor = myColors[randomIndex];
    return () => randomColor;
  })();

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await client.getEntries({
          content_type: "recipes",
          query: query,
        });
        setResults(response.items);
      } catch (error) {
        console.error("Error searching Contentful:", error);
      }
    };

    if (query) {
      fetchEntries();
    }
  }, [client, query]);

  return (
    <div className="AllCardsContainer">
      {results.map((recipe) => (
        <Link to={`/AllRecipes/${recipe.sys.id}`}>
          <div
            key={recipe.sys.id}
            className="CardContainer"
            style={{
              backgroundColor: getRandomColor(),
              transition: "2000000s",
            }}
          >
            <div className="CardHeader">
              <img
                className="CardHeaderImg"
                src={recipe.fields.recipePicture.fields.file.url}
                alt={recipe.fields.recipePicture.fields.file.fileName}
              />
              <div className="CardText">
                <h3 className="CardHeaderTitle">{recipe.fields.recipeTitle}</h3>
                <p>Description</p>
                <div className="CardTextInfo">
                  <h5>PrepTime</h5>
                  <h5>{recipe.fields.category}</h5>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Searched;
