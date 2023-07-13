import React from "react";
import styles from "./Message.module.css";

export default function Message() {
  return (
    <>
      <div class={styles.ownerSide}>
        <div class={styles.userProfile}>
          <img src="./img/user-profile.png" alt="" />
        </div>
        <div class={styles.messageBox}>
          <p class={styles.message}>This text is from owner</p>
          <p class={styles.time}>16:03:15</p>
        </div>
      </div>
      <div class={styles.oppositeSide}>
        <div class={styles.userProfile}>
          <img src="./img/user-profile.png" alt="" />
        </div>
        <div class={styles.messageBox}>
          <p class={styles.message}>This text is from opposite</p>
          <p class={styles.time}>17:10:25</p>
        </div>
      </div>
    </>
  );
}
