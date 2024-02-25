import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";

const Searched = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const client = createClient({
    space: "mwoz8j7lspjq",
    accessToken: "7d4TEO9tdvluAn_KIRYM_jcoyDImg9rZcuS4HxrGbuc",
  });

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
    <div>
      <h1>Search Results</h1>
      <ul>
        {results.map((item) => (
          <li key={item.sys.id}>{item.fields.recipeTitle}</li>
        ))}
      </ul>
    </div>
  );
};

export default Searched;
