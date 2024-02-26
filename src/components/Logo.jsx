import styles from "./Logo.module.css";
import React from "react";

const Logo = () => {
  return (
    <div>
      <img
        className={`${styles.logo}`}
        src="/NimopaisLogo.png"
        alt="NimopaisLogo"
      />
    </div>
  );
};

export default Logo;
