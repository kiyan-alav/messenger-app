import React from "react";
import styles from "./ChatIntro.module.css";

export default function ChatIntro(props) {
  return (
    <div class={styles.chatIntro}>
      <h2 class={styles.chatTitle}>Phoenix</h2>
      {props.children}
    </div>
  );
}
