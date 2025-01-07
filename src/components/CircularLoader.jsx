import React from "react";
import styles from "./CircularLoader.module.css";

const CircularLoader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default CircularLoader;
