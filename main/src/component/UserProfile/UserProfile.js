import React, { useContext } from "react";
import styles from "./UserProfile.module.css";
import { AuthContext } from "../../context/AuthContext";

export default function UserProfile() {
  const currUserCtx = useContext(AuthContext);

  console.log(currUserCtx);

  return (
    <section className={styles.userProfileSection}>
      <article className={styles.mainInformation}>
        <div className={styles.userProfile}>
          <img src={`${currUserCtx.user_metadata.avatar}`} alt="" />
        </div>
        <p className={styles.fullName}>{currUserCtx.user_metadata.fullName}</p>
      </article>
      <article className={styles.otherInformation}>
        <h3>Personal Information</h3>
        <div className={styles.info}>
          <h4>Country</h4>
          <p>Iran</p>
        </div>
        <div className={styles.info}>
          <h4>Gender</h4>
          <p>{currUserCtx.user_metadata.gender}</p>
        </div>
        <div className={styles.info}>
          <h4>Email</h4>
          <p>{currUserCtx.email}</p>
        </div>
      </article>
    </section>
  );
}
