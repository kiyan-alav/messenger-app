import React from "react";
import styles from "./User.module.css";

export default function User() {
  return (
    <article className={styles.recentUser}>
      <div className={styles.userInfos}>
        <div className={styles.userProfile}>
          <img src="./img/user-profile.png" alt="ax" />
        </div>
        <div className={styles.userInfo}>
          <h5>Kiyan Alavi</h5>
          <p>Salam Khubi?</p>
        </div>
      </div>
      <div className={styles.time}>13:34</div>
    </article>
  );
}
