import React from "react";
import Message from "../Message/Message";
import styles from "./ChatContent.module.css";

export default function ChatContent() {
  return (
    <section class={styles.chatContent}>
      <h3>Chat</h3>
      <article class={styles.topBar}>
        <div class={styles.userInfos}>
          <div class={styles.userProfile}>
            <img src="./img/user-profile.png" alt="" />
          </div>
          <div class={styles.userInfo}>
            <h5>Kiyan Alavi</h5>
            <p>Online</p>
          </div>
        </div>
        <button class={styles.back}>Back</button>
        <div class={styles.chatIcon}>
          <button>
            <i class="fas fa-phone-alt"></i>
          </button>
          <button>
            <i class="fas fa-video"></i>
          </button>
        </div>
      </article>
      <article class={styles.userChats}>
        <Message />
        <Message />
        <Message />
        <Message />
      </article>
      <article class={styles.inputBox}>
        <button class={styles.messageIcon}>
          <i class="fas fa-plus"></i>
        </button>
        <form action="" className={styles.messageForm}>
          <input
            type="text"
            placeholder="Type your message"
            className={styles.messageInput}
          />
          <button type="submit" className={styles.send}>
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </article>
    </section>
  );
}
