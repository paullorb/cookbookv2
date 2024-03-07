import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`${styles.inputContainer}`}>
      <form onSubmit={submitHandler} className={`${styles.form}`}>
        <input
          onChange={(e) => setInput(e.target.value)}
          className={`${styles.input}`}
          type="text"
          value={input}
        />
        <Link to={`/AllRecipes/searched/${input}`}>
          <FaSearch />
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
