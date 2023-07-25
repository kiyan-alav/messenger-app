import React from "react";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <img src="./img/ring-resize.svg" alt="" />
      <h3>Loading...</h3>
    </div>
  );
}
