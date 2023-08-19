import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = function (props) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
