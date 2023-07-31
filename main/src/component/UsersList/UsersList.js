import React, { useState } from "react";
import supabase from "./../../config/supabaseClient";
import styles from "./UsersList.module.css";
import User from "../User/User";

export default function UsersList() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const handleSearch = async function () {
    const { data, error } = await supabase
      .from("users")
      .select("fullName")
      .eq(userName);

    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  };

  const handleKey = function (e) {
    console.log(e.code);
    if (e.code === "ENTER") {
      e.preventDefault();
      handleSearch();
    }
    // e.code === "ENTER" && handleSearch();
  };

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
            onKeyDown={handleKey}
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
