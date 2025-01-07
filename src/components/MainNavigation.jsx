import React from "react";
import styles from "./MainNavigation.module.css";
import { useNavigate } from "react-router-dom";

function MainNavigation() {
  const navigate = useNavigate();
  return (
    <div className={styles.mainContainer}>
      <button onClick={() => navigate("/")}>HomePage</button>
      <button onClick={() => navigate("create")}>New Note</button>
    </div>
  );
}

export default MainNavigation;
