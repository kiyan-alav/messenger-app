import React from "react";
import styles from "./Message.module.css";

export default function Message() {
  return (
    <>
      <div className={styles.ownerSide}>
        <div className={styles.userProfile}>
          <img src="./img/user-profile.png" alt="" />
        </div>
        <div className={styles.messageBox}>
          <p className={styles.message}>This text is from owner</p>
          <p className={styles.time}>16:03:15</p>
        </div>
      </div>
      <div className={styles.oppositeSide}>
        <div className={styles.userProfile}>
          <img src="./img/user-profile.png" alt="" />
        </div>
        <div className={styles.messageBox}>
          <p className={styles.message}>This text is from opposite</p>
          <p className={styles.time}>17:10:25</p>
        </div>
      </div>
    </>
  );
}
