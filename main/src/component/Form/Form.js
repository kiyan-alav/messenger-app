import React from "react";
import ChatLogo from "../ChatLogo/ChatLogo";
import ChatIntro from "../ChatIntro/ChatIntro";
import "./Form.css";

export default function Form(props) {
  return (
    <main>
      <ChatLogo />
      <ChatIntro />
      <div>
        <form action="">{props.children}</form>
      </div>
    </main>
  );
}
