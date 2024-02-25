import React from "react";
import styles from "./RightNav.module.css";
import { FaInstagram, FaYoutube, FaPinterest, FaTwitter } from "react-icons/fa";

const RightNav = () => {
  return (
    <nav className={`${styles.rightNav}`}>
      <div className={`${styles.AnchorTag}`}>
        <a href="">Recepie</a>
      </div>
      <div className={`${styles.AnchorTag}`}>
        <a href="">About</a>
      </div>
      <div className={`${styles.AnchorTag}`}>
        <a href="">Contact</a>
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
