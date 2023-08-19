import React, { useState } from "react";
import styles from "./UsersList.module.css";
import User from "../User/User";

export default function UsersList() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  return (
    <section className={styles.usersList}>
      <h2>Chats List</h2>
      <form action="" className={styles.searchBox}>
        <div className={styles.searchBar}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search For Users..."
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={"handleKey"}
            // value={userName}
          />
        </div>
        <div className={styles.searchIcon}>
          <i className="fas fa-search"></i>
        </div>
      </form>
      <h3>Recent Chats</h3>
      <section className={styles.recentUsersSection}>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </section>
    </section>
  );
}
