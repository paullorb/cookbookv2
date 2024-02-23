import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <form className={`${styles.form}`}>
        <div className={`${styles.inputContainer}`}>
          <FaSearch />
          <input
            onChange={(e) => setInput(e.target.value)}
            className={`${styles.input}`}
            type="text"
            value={input}
          />
        </div>
      </form>
      <h1>{input}</h1>
    </div>
  );
};

export default SearchBar;
