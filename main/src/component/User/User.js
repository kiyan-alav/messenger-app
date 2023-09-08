import React from "react";
import styles from "./User.module.css";

export default function User({
  photoURL,
  displayName,
  lastMessage,
  onHandleChatSelect,
  date,
}) {
  console.log(date)

  return (
    <article className={styles.recentUser} onClick={() => onHandleChatSelect()}>
      <div className={styles.userInfos}>
        <div className={styles.userProfile}>
          <img src={photoURL} alt="ax" />
        </div>
        <div className={styles.userInfo}>
          <h5>{displayName}</h5>
          <p>{lastMessage}</p>
        </div>
      </div>
      <div className={styles.time}>{new Date(date * 1000).toString().slice(16, 21)}</div>
    </article>
  );
}
