import React, { useContext, useEffect, useState } from "react";
import styles from "./UsersList.module.css";
import User from "../User/User";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

export default function UsersList() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  // const [error, setError] = useState(false);
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = function () {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => unsub();
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSearch = async function (e) {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleKey = function (e) {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async function (u) {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
      console.log(chats)
      dispatch({ type: "CHANGE_USER", payload: u });
    } catch (error) {
      console.log(error);
    }

    setUser(null);
    setUserName("");
  };

  const handleChatSelect = function (user) {
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  return (
    <section className={styles.usersList}>
      <h2>Chats List</h2>
      <div className={styles.searchBox}>
        <div className={styles.searchBar}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search For User Full Name..."
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={handleKey}
            value={userName}
          />
        </div>
        <div className={styles.searchIcon}>
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div style={{ borderBottom: "1px solid #ccc", padding: "10px 15px" }}>
        {user && (
          <article
            className={styles.recentUser}
            onClick={() => handleSelect(user)}
          >
            <div className={styles.userInfos}>
              <div className={styles.userProfile}>
                <img src={user.photoURL} alt="ax" />
              </div>
              <div className={styles.userInfo}>
                <h5>{user.displayName}</h5>
              </div>
            </div>
            <div className={styles.time}>13:34</div>
          </article>
        )}
        {/* {!user && <span style={{ color: "#ccc" }}>User not found</span>} */}
        {/* <User /> */}
      </div>
      <h3>Recent Chats</h3>
      <section className={styles.recentUsersSection}>
        {Object.entries(chats)?.sort((a,b)=> b[1].date - a[1].date).map((chat) => (
          <User
            key={chat[0]}
            photoURL={chat[1].userInfo.photoURL}
            displayName={chat[1].userInfo.displayName}
            lastMessage={chat[1].lastMessage?.text}
            onHandleChatSelect={() => handleChatSelect(chat[1].userInfo)}
          />
        ))}
      </section>
    </section>
  );
}
