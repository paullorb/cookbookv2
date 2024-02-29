import React from "react";
import styles from "./RightNav.module.css";
import { FaInstagram, FaYoutube, FaPinterest, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const RightNav = () => {
  return (
    <nav className={`${styles.rightNav}`}>
      <div className={`${styles.AnchorTag}`}>
        <Link to="/AllRecipes">Recipe's</Link>
      </div>
      <div className={`${styles.AnchorTag}`}>
        <Link to="/About">About</Link>
      </div>
      <div className={`${styles.AnchorTag}`}>
        <Link to="/Contact">Contact</Link>
      </div>
      <div className={`${styles.socialLinksWrapper}`}>
        <a href="">
          <FaInstagram />
        </a>

        <a href="">
          <FaYoutube />
        </a>
        <a href="">
          <FaPinterest />
        </a>

        <a href="">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default RightNav;
