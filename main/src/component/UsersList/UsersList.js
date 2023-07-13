import React from "react";
import styles from "./UsersList.module.css";
import User from "../User/User";

export default function UsersList() {
  return (
    <section class={styles.usersList}>
      <h2>Chats List</h2>
      <form action="" class={styles.searchBox}>
        <div class={styles.searchBar}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search For Users..."
          />
        </div>
        <div class={styles.searchIcon}>
          <i class="fas fa-search"></i>
        </div>
      </form>
      <h3>Recent Chats</h3>
      <section class={styles.recentUsersSection}>
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
