import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Form from "../../component/Form/Form";
import styles from "./Register.module.css";

import supabase from "./../../config/supabaseClient";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const signInHandler = async function (e) {
    e.preventDefault();
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      (!password.trim() && !cPassword.trim()) ||
      !country.trim() ||
      !gender.trim()
    ) {
      Swal.fire("Please Complete All Fields");
      return;
    }
    if (password !== cPassword) {
      Swal.fire("Your Password Doesn't Match! Try Again.");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          fullName: `${firstName} ${lastName}`,
          country: country,
          gender: gender,
        },
      },
    });

    if (data) {
      Swal.fire({
        icon: "success",
        title: "Registration Completed",
        text: "Please Check Your Email To Confirm",
      });
      navigate("/login");
    }

    console.log(data, error);
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
      <button type="submit" className={styles.signUp} onClick={signInHandler}>
        Sign Up
      </button>
    </Form>
  );
}
