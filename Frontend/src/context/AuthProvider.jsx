import { createContext, useContext, useState } from "react";

// To globally access our user, we use the Context API

// First, create a context
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AuthProvider( {children} ) {
  const initialAuthUser = localStorage.getItem("user");
  const [authUser, setAuthUser] = useState(initialAuthUser ? JSON.parse(initialAuthUser) : undefined);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
