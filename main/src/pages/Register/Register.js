import React from "react";
import Form from "../../component/Form/Form";
import "./Register.css";

export default function Register() {
  return (
    <Form>
      <input
        type="text"
        placeholder="First Name"
        name="first-name"
        id="first-name"
        autofocus
      />
      <input
        type="text"
        placeholder="Last Name"
        name="last-name"
        id="last-name"
      />
      <input type="email" placeholder="Email" name="email" id="email" />
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="password"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        name="confirm-password"
        id="confirm-password"
      />
      <input type="text" placeholder="Country" name="country" id="country" />
      <input
        type="tel"
        placeholder="Cell Phone"
        name="cell-phone"
        id="cell-phone"
        pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
      />
      <div class="gender-box">
        <div class="male">
          <label for="male">Male</label>
          <input type="radio" name="gender" id="male" />
        </div>
        <div class="female">
          <label for="female">Female</label>
          <input type="radio" name="gender" id="female" />
        </div>
      </div>
      <button type="submit" class="sign-up">
        Sign Up
      </button>
    </Form>
  );
}
