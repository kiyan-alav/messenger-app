import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main id="home">
      <div className={styles.chatLogo}>
        <img src="./img/phoenix.svg" alt="logo" />
      </div>
      <div className={styles.chatIntro}>
        <h2 className={styles.chatTitle}>Phoenix</h2>
        <p>
          Welcome To Phoenix Chat App. The First Messenger App That Developed By
          Kiyan Alavi :). Hope You Enjoy!!
        </p>
      </div>
      <div className={styles.registerLogin}>
        <p>
          Didn't you have account?
          <a href="./register.html" className="create">
            Create one
          </a>{" "}
          or
          <a href="./login.html" className="login">
            Login
          </a>
        </p>
      </div>
    </main>
  );
}
