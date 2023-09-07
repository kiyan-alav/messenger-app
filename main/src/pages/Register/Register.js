import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../config/firebase";
import Form from "../../component/Form/Form";
import styles from "./Register.module.css";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const registerHandler = async function (event) {
    event.preventDefault();

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${fullName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName: fullName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: fullName,
              email: email,
              password: password,
              country: country,
              gender: gender,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
          }
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={registerHandler}>
      <input
        type="text"
        placeholder="Full Name"
        name="full-name"
        id="full-name"
        autoFocus
        className={styles.registerInput}
        onChange={(e) => setFullName(e.target.value)}
        value={fullName}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        className={styles.registerInput}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="password"
        className={styles.registerInput}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        name="confirm-password"
        id="confirm-password"
        className={styles.registerInput}
        onChange={(e) => setCPassword(e.target.value)}
        value={cPassword}
      />
      <input
        type="text"
        placeholder="Country"
        name="country"
        id="country"
        className={styles.registerInput}
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      />
      <div className={styles.avatar}>
        <input
          type="file"
          placeholder="Avatar"
          id="avatar"
          style={{ display: "none" }}
          name="avatar"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="avatar">
          <img src="./img/addAvatar.jfif" alt="" />
          <span>Add Avatar</span>
        </label>
      </div>
      <div className={styles.genderBox}>
        <div className={styles.male}>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="male"
            className={styles.registerInput}
            onChange={(e) => setGender(e.target.value)}
            value="male"
          />
        </div>
        <div className={styles.female}>
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            name="gender"
            id="female"
            className={styles.registerInput}
            onChange={(e) => setGender(e.target.value)}
            value="female"
          />
        </div>
      </div>
      <button type="submit" className={styles.signUp}>
        Sign Up
      </button>
    </Form>
  );
}
