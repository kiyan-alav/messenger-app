import React from "react";
import ChatLogo from "./../../component/ChatLogo/ChatLogo";
import ChatIntro from "./../../component/ChatIntro/ChatIntro";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <ChatLogo />
      <ChatIntro>
        <p className={styles.chatIntroText}>
          Welcome To Phoenix Chat App. The First Messenger App That Developed By
          Kiyan Alavi :). Hope You Enjoy!!
        </p>
      </ChatIntro>
      <div className={styles.registerLogin}>
        <p>
          Didn't you have account?{" "}
          <a href="./register.html" className="create">
            Create one
          </a>{" "}
          or{" "}
          <a href="./login.html" className="login">
            Login
          </a>
        </p>
      </div>
    </main>
  );
}
