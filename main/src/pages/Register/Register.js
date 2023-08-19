import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../config/firebase";
import Swal from "sweetalert2";
import Form from "../../component/Form/Form";
import styles from "./Register.module.css";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, "test");
      const uploadTask = uploadBytesResumable(storageRef, file[0]);
      uploadTask.on(
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName: firstName,
              photoURL: downloadURL,
            });
            console.log("Successfully upload photo");
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              fullName: `${firstName} ${lastName}`,
              email: email,
              country: country,
              gender: gender,
              photoURL: downloadURL,
            });
            console.log("Successfully updated profile");
          });
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form>
      <input
        type="text"
        placeholder="First Name"
        name="first-name"
        id="first-name"
        autoFocus
        className={styles.registerInput}
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="last-name"
        id="last-name"
        className={styles.registerInput}
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
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
          onChange={(e) => setFile(e.target.files)}
        />
        <label htmlFor="avatar">
          <img src="./img/addAvatar.jfif" alt="" />
          <span>Add An Avatar</span>
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
      <button type="submit" className={styles.signUp} onClick={registerHandler}>
        Sign Up
      </button>
    </Form>
  );
}
