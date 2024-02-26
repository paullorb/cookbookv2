import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
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
        <FaSearch />
      </form>
    </div>
  );
};

export default SearchBar;
