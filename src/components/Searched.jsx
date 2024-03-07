import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";
import "../App.css";
import { NavLink, Link } from "react-router-dom";

const Searched = () => {
  const [results, setResults] = useState([]);

  const myColors = ["#bed0e8", "#e5e8be", "#e8c1be", "#bee8d6", "#d6bee8"];

  const getRandomColor = (() => {
    const randomIndex = Math.floor(Math.random() * myColors.length);
    const randomColor = myColors[randomIndex];
    return () => randomColor;
  })();

  const { query } = useParams();

  let [SearchedRecipes, setSearchedRecipes] = useState(["Loading recipes..."]);

  const fetchAPI = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/AllRecipes/searched/${query}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setSearchedRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="AllCardsContainer">
      {SearchedRecipes.map((recipe) => (
        <Link to={`/AllRecipes/${recipe.id}`}>
          <div
            key={recipe.id}
            className="CardContainer"
            style={{
              backgroundColor: getRandomColor(),
              transition: "2000000s",
            }}
          >
            <div className="CardHeader">
              <img
                className="CardHeaderImg"
                src={recipe.picture_url}
                alt={recipe.recipetitle}
              />
              <div className="CardText">
                <h3 className="CardHeaderTitle">{recipe.recipetitle}</h3>
                <p>Description</p>
                <div className="CardTextInfo">
                  <h5>PrepTime</h5>
                  <h5>{recipe.category}</h5>
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
