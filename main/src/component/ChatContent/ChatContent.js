import React, { useContext, useEffect, useState } from "react";
import Message from "../Message/Message";
import styles from "./ChatContent.module.css";
import { signOut } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { ChatContext } from "../../context/ChatContext";
import {
  Timestamp,
  arrayUnion,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";

export default function ChatContent() {
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);

  const [text, setText] = useState("");

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => unSub();
  }, [data.chatId]);

  const handleSend = async function (e) {
    e.preventDefault();
    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion({
        id: crypto.randomUUID(),
        text: text,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      }),
    });

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text: text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text: text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
  };

  return (
    <section className={styles.chatContent}>
      <h3>Chat</h3>
      <article className={styles.topBar}>
        <div className={styles.userInfos}>
          <div className={styles.userProfile}>
            <img src={data.user?.photoURL} alt="" />
          </div>
          <div className={styles.userInfo}>
            <h5>{data.user?.displayName}</h5>
            {/* <p>Online</p> */}
          </div>
        </div>
        <button className={styles.back} onClick={() => signOut(auth)}>
          Logout
        </button>
        {/* <div className={styles.chatIcon}>
          <button>
            <i className="fas fa-phone-alt"></i>
          </button>
          <button>
            <i className="fas fa-video"></i>
          </button>
        </div> */}
      </article>
      <article className={styles.userChats}>
        {messages.map((msg) => (
          <Message key={msg.id} {...msg} />
        ))}
      </article>
      <article className={styles.inputBox}>
        {/* <button className={styles.messageIcon}>
          <i className="fas fa-plus"></i>
        </button> */}
        <form action="" className={styles.messageForm}>
          <input
            type="text"
            placeholder="Type your message"
            className={styles.messageInput}
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button type="submit" className={styles.send} onClick={handleSend}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </article>
    </section>
  );
}
