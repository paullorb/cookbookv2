import styles from "./Logo.module.css";
import React from "react";
import { FaInstagram, FaYoutube, FaPinterest, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          className={`${styles.logo}`}
          src="/NimopaisLogo.png"
          alt="NimopaisLogo"
        />
      </Link>
    </div>
  );
};

export default Logo;
