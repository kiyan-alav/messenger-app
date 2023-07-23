import React from "react";
import ChatLogo from "./../../component/ChatLogo/ChatLogo";
import ChatIntro from "./../../component/ChatIntro/ChatIntro";

import styles from "./Home.module.css";
import { Link } from "react-router-dom";

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
          <Link to="register" className="create">
            Create one
          </Link>{" "}
          or{" "}
          <Link to="login" className="login">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
