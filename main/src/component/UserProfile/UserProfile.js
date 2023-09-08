import React, { useContext, useEffect, useState } from "react";
import styles from "./UserProfile.module.css";
import { AuthContext } from "../../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export default function UserProfile() {
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState([])

  useEffect(() => {
    const getUser = async function () {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUser(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };

    getUser()
  }, [currentUser.uid]);

  console.log(user)

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
          <p>{user.country}</p>
        </div>
        <div className={styles.info}>
          <h4>Gender</h4>
          <p>{user.gender}</p>
        </div>
        <div className={styles.info}>
          <h4>Email</h4>
          <p>{currentUser.email}</p>
        </div>
      </article>
    </section>
  );
}
