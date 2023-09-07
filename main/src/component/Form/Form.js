import React from "react";
import ChatLogo from "../ChatLogo/ChatLogo";
import ChatIntro from "../ChatIntro/ChatIntro";
import styles from "./Form.module.css";

export default function Form(props) {
  return (
    <main className={styles.main}>
      <ChatLogo />
      <ChatIntro />
      <div>
        <form action="" onSubmit={(e) => props.onSubmit(e)}>
          {props.children}
        </form>
      </div>
    </main>
  );
}
