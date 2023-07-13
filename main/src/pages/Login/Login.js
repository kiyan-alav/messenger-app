import React from "react";
import Form from "../../component/Form/Form";
import "./Login.css";

export default function Login() {
  return (
    <Form>
      <input type="email" placeholder="Email" name="email" id="email" />
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="password"
      />
      <button type="submit">Login</button>
    </Form>
  );
}
