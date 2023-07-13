import React from "react";
import styles from "./ChatLogo.module.css";

export default function ChatLogo() {
  return (
    <div className={styles.chatLogo}>
      <img src="./img/phoenix.svg" alt="logo" />
    </div>
  );
}
