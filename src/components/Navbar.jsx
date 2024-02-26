import React from "react";
import styles from "./Navbar.module.css";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import RightNav from "./RightNav";

const Navbar = () => {
  return (
    <div className={`${styles.container}`}>
      <Logo />
      <SearchBar />
      <RightNav />
    </div>
  );
};

export default Navbar;
