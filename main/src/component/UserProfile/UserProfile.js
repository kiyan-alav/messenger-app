import React, { useContext } from "react";
import styles from "./UserProfile.module.css";
import { AuthContext } from "../../context/AuthContext";

export default function UserProfile() {
  const { currentUser } = useContext(AuthContext);

  return (
    <section className={styles.userProfileSection}>
      <article className={styles.mainInformation}>
        <div className={styles.userProfile}>
          <img src={`${currentUser.photoURL}`} alt="" />
        </div>
        <p className={styles.fullName}>{currentUser.displayName}</p>
      </article>
      <article className={styles.otherInformation}>
        <h3>Personal Information</h3>
        <div className={styles.info}>
          <h4>Country</h4>
          <p>Iran</p>
        </div>
        <div className={styles.info}>
          <h4>Gender</h4>
          <p>{"currentUser.user_metadata.gender"}</p>
        </div>
        <div className={styles.info}>
          <h4>Email</h4>
          <p>{currentUser.email}</p>
        </div>
      </article>
    </section>
  );
}
