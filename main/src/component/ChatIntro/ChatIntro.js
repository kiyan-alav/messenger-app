import React from "react";
import styles from "./ChatIntro.module.css";

export default function ChatIntro(props) {
  return (
    <div className={styles.chatIntro}>
      <h2 className={styles.chatTitle}>Phoenix</h2>
      {props.children}
    </div>
  );
}
