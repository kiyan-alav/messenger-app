import React from "react";
import "./Form.css";

import ChatLogo from "../ChatLogo/ChatLogo";
import ChatIntro from "../ChatIntro/ChatIntro";

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
