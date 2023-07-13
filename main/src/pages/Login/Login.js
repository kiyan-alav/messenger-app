import React from "react";
import Form from "../../component/Form/Form";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <Form>
      <input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        className={styles.loginInput}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="password"
        className={styles.loginInput}
      />
      <button type="submit" className={styles.login}>
        Login
      </button>
    </Form>
  );
}
