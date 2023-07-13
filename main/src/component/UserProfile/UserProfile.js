import React from "react";
import styles from "./UserProfile.module.css";

export default function UserProfile() {
  return (
    <section class={styles.userProfileSection}>
      <article class={styles.mainInformation}>
        <div class={styles.userProfile}>
          <img src="./img/user-profile.png" alt="" />
        </div>
        <p class={styles.fullName}>Kiyan Alavi</p>
      </article>
      <article class={styles.otherInformation}>
        <h3>Personal Information</h3>
        <div class={styles.info}>
          <h4>Country</h4>
          <p>Iran</p>
        </div>
        <div class={styles.info}>
          <h4>Phone</h4>
          <p>+98 936 558 4552</p>
        </div>
        <div class={styles.info}>
          <h4>Email</h4>
          <p>test@email.com</p>
        </div>
      </article>
    </section>
  );
}
