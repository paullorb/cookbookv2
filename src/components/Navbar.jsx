import React from "react";
import styles from "./Navbar.module.css";
import { FaInstagram, FaYoutube, FaPinterest, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className={`${styles.container}`}>
      <Logo />
      <SearchBar />
    </div>
  );
};

export default Navbar;
