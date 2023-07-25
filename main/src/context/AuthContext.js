import { createContext, useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import Home from "../pages/Home/Home";

export const AuthContext = createContext({});

const AuthProvider = function (props) {
  const [user, setUser] = useState(null);

  const onAuthStateChange = async function () {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      setUser(user);
    }
  };

  useEffect(() => {
    onAuthStateChange();
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {user ? props.children : <Home />}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
