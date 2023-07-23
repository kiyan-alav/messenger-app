import React from "react";
import Form from "../../component/Form/Form";
import styles from "./Register.module.css";

export default function Register() {
  return (
    <Form>
      <input
        type="text"
        placeholder="First Name"
        name="first-name"
        id="first-name"
        autoFocus
        className={styles.registerInput}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="last-name"
        id="last-name"
        className={styles.registerInput}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        className={styles.registerInput}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="password"
        className={styles.registerInput}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        name="confirm-password"
        id="confirm-password"
        className={styles.registerInput}
      />
      <input
        type="text"
        placeholder="Country"
        name="country"
        id="country"
        className={styles.registerInput}
      />
      <div className={styles.genderBox}>
        <div className={styles.male}>
          <label for="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="male"
            className={styles.registerInput}
          />
        </div>
        <div className={styles.female}>
          <label for="female">Female</label>
          <input
            type="radio"
            name="gender"
            id="female"
            className={styles.registerInput}
          />
        </div>
      </div>
      <button type="submit" className={styles.signUp}>
        Sign Up
      </button>
    </Form>
  );
}
