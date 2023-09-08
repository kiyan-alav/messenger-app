import React, { useState } from "react";
import Form from "../../component/Form/Form";
import styles from "./Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signInHandler = async function (event) {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/chat");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Form onSubmit={signInHandler}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          className={styles.loginInput}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          className={styles.loginInput}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" className={styles.login}>
          Login
        </button>
        <div className={styles.registerLogin}>
          <p>
            Didn't you have account?{" "}
            <Link to="/register" className="create">
              Create one
            </Link>{" "}
            or <Link to="/">Back to home</Link>
          </p>
        </div>
      </Form>
    </>
  );
}
