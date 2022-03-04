import React from "react";
import styles from "./style.module.css"

const Header = () => {
  return (
    <>
      <div className={`${styles.Header}`}>
        <h1>Todo List</h1>
      </div>
    </>
  );
};

export default Header;
