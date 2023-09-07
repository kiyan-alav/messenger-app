import React, { useContext } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import RootLayout from "./component/RootLayout/RootLayout";
import Chat from "./pages/Chat/Chat";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { AuthContext } from "./context/AuthContext";

const ProtectedRoute = function ({ children }) {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h2>This Page Not Found :)</h2>,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "chat",
        element: (
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        ),
      },
      // {
      //   path: "chat",
      //   element: (
      //     <React.Suspense fallback={<Loading />}>
      //       <Chat />
      //     </React.Suspense>
      //   ),
      // },
    ],
  },
]);

export { routes };
