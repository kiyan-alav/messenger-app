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
        autofocus
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
      <input
        type="tel"
        placeholder="Cell Phone"
        name="cell-phone"
        id="cell-phone"
        pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
        className={styles.registerInput}
      />
      <div class={styles.genderBox}>
        <div class={styles.male}>
          <label for="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="male"
            className={styles.registerInput}
          />
        </div>
        <div class={styles.female}>
          <label for="female">Female</label>
          <input
            type="radio"
            name="gender"
            id="female"
            className={styles.registerInput}
          />
        </div>
      </div>
      <button type="submit" class={styles.signUp}>
        Sign Up
      </button>
    </Form>
  );
}
