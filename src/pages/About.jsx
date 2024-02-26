import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.head}`}>
        <h1 className={`${styles.title}`}>About Us</h1>
        <p>
          Introducing the culinary dream team behind Nimopias – where
          gastronomic genius meets coding wizardry! Niloufar, the spice
          sorcerer; Moritz, the dough maestro; Isak, the flavor architect; and
          Paul, the recipe whisperer. Together, they've cooked up a storm in the
          digital kitchen, blending their passion for food with their knack for
          crafting pixel-perfect interfaces. From tantalizing tandooris to
          decadent desserts, Nimopias is your one-stop destination for culinary
          inspiration and coding escapades. Get ready to embark on a taste
          bud-tickling journey like never before!
        </p>
      </div>
    </div>
  );
};

export default About;
