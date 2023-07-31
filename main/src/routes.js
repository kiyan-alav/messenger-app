import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "./component/Loading/Loading";
import RootLayout from "./component/RootLayout/RootLayout";
import Chat from "./pages/Chat/Chat";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h2>This Page Not Found :)</h2>,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      // { path: "chat", element: <Chat /> },
      {
        path: "chat",
        element: (
          <React.Suspense fallback={<Loading />}>
            <Chat />
          </React.Suspense>
        ),
      },
    ],
  },
]);
