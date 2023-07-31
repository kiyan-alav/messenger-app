import React, { useState } from "react";
import Form from "../../component/Form/Form";
import styles from "./Login.module.css";
// import supabase from "../../config/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // const loginHandler = async function (e) {
  //   e.preventDefault();

  //   const { data, error } = await supabase.auth.signInWithPassword({
  //     email: email,
  //     password: password,
  //   });

  //   if (data) {
  //     console.log(data);
  //     navigate("/chat");
  //   } else {
  //     console.log(error);
  //   }
  // };

  return (
    <Form>
      <input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        className={styles.loginInput}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="password"
        className={styles.loginInput}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className={styles.login} onClick={"loginHandler"}>
        Login
      </button>
    </Form>
  );
}
