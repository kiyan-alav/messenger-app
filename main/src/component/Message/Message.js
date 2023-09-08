import React, { useContext, useEffect, useRef } from "react";
import styles from "./Message.module.css";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";

export default function Message({ senderId, text, date }) {
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [senderId, text, date]);

  return (
    <>
      <div
        ref={ref}
        className={`${
          senderId === currentUser.uid ? styles.ownerSide : styles.oppositeSide
        }`}
      >
        <div className={styles.userProfile}>
          <img
            src={
              senderId === currentUser.uid
                ? currentUser.photoURL
                : data.user.photoURL
            }
            alt=""
          />
        </div>
        <div className={styles.messageBox}>
          <p className={styles.message}>{text}</p>
          <p className={styles.time}>
            {new Date(date.seconds * 1000).toString().slice(16, 24)}
          </p>
        </div>
      </div>
    </>
  );
}
