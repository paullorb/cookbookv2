import React from "react";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={`${styles.container}`}>
      <h1 className={`${styles.title}`}>Contact Us</h1>
      <div className={`${styles.inner}`}>
        <div className={`${styles.imwrapper}`}>
          <img src="/contact.jpg" alt="pizza" />
        </div>
        <form className={`${styles.form}`} action="">
          <div className={`${styles.fieldBlock}`}>
            <label
              className={`${styles.fieldLabel}`}
              htmlFor="name"
              class="field-label"
            >
              Name
            </label>
            <input
              className={`${styles.formInput}`}
              placeholder="Enter your name"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className={`${styles.fieldBlock}`}>
            <label
              className={`${styles.fieldLabel}`}
              htmlFor="name"
              class="field-label"
            >
              E-MAIL
            </label>
            <input
              className={`${styles.formInput}`}
              placeholder="Enter your email"
              type="email"
              name=""
              id=""
            />
          </div>
          <div className={`${styles.fieldBlock}`}>
            <label
              className={`${styles.fieldLabel}`}
              htmlFor="name"
              class="field-label"
            >
              message
            </label>
            <input
              className={`${styles.formtext}`}
              type="text"
              name=""
              id=""
              placeholder="Enter message here"
            />
          </div>
          <button className={`${styles.btn}`} type="submit">
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
