import React from "react";
import Message from "../Message/Message";
import styles from "./ChatContent.module.css";
import supabase from "../../config/supabaseClient";

export default function ChatContent() {
  const signOutHandler = async function () {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.chatContent}>
      <h3>Chat</h3>
      <article className={styles.topBar}>
        <div className={styles.userInfos}>
          <div className={styles.userProfile}>
            <img src="./img/user-profile.png" alt="" />
          </div>
          <div className={styles.userInfo}>
            <h5>Kiyan Alavi</h5>
            <p>Online</p>
          </div>
        </div>
        <button className={styles.back} onClick={signOutHandler}>
          Logout
        </button>
        <div className={styles.chatIcon}>
          <button>
            <i className="fas fa-phone-alt"></i>
          </button>
          <button>
            <i className="fas fa-video"></i>
          </button>
        </div>
      </article>
      <article className={styles.userChats}>
        <Message />
        <Message />
        <Message />
        <Message />
      </article>
      <article className={styles.inputBox}>
        <button className={styles.messageIcon}>
          <i className="fas fa-plus"></i>
        </button>
        <form action="" className={styles.messageForm}>
          <input
            type="text"
            placeholder="Type your message"
            className={styles.messageInput}
          />
          <button type="submit" className={styles.send}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </article>
    </section>
  );
}
