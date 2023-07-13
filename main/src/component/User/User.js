import React from "react";
import styles from "./User.module.css";

export default function User() {
  return (
    <article class={styles.recentUser}>
      <div class={styles.userInfos}>
        <div class={styles.userProfile}>
          <img src="./img/user-profile.png" alt="" />
        </div>
        <div class={styles.userInfo}>
          <h5>Kiyan Alavi</h5>
          <p>Salam Khubi?</p>
        </div>
      </div>
      <div class={styles.time}>13:34</div>
    </article>
  );
}
