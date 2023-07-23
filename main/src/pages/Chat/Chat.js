import React from "react";
import styles from "./Chat.module.css";
import UsersList from "../../component/UsersList/UsersList";
import UserProfile from "../../component/UserProfile/UserProfile";
import ChatContent from "../../component/ChatContent/ChatContent";

export default function Chat() {
  return (
    <main className={styles.chat}>
      <UsersList />
      <ChatContent />
      <UserProfile />
    </main>
  );
}
