import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./context/AuthContext";
import App from "./App";
import ChatProvider from "./context/ChatContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <ChatProvider>
      <App />
    </ChatProvider>
  </AuthProvider>
);
