import { createContext, useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import Loading from "../component/Loading/Loading";

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
      {user ? props.children : <Loading />}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
