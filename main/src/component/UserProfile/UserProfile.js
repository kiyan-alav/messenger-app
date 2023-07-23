import React from "react";
import styles from "./UserProfile.module.css";

export default function UserProfile() {
  return (
    <section className={styles.userProfileSection}>
      <article className={styles.mainInformation}>
        <div className={styles.userProfile}>
          <img src="./img/user-profile.png" alt="" />
        </div>
        <p className={styles.fullName}>Kiyan Alavi</p>
      </article>
      <article className={styles.otherInformation}>
        <h3>Personal Information</h3>
        <div className={styles.info}>
          <h4>Country</h4>
          <p>Iran</p>
        </div>
        <div className={styles.info}>
          <h4>Phone</h4>
          <p>+98 936 558 4552</p>
        </div>
        <div className={styles.info}>
          <h4>Email</h4>
          <p>test@email.com</p>
        </div>
      </article>
    </section>
  );
}
