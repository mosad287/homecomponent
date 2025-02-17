import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export default function LoginContextProvider({ children }) {
  const [checklogIn, setCheckLogIn] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.userToken && setCheckLogIn(false);
  }, [checklogIn]);

  useEffect(() => {
    localStorage.userToken && setLoading(false);
  }, [loading]);

  return (
    <LoginContext.Provider
      value={{ checklogIn, setCheckLogIn, loading, setLoading }}
    >
      {children}
    </LoginContext.Provider>
  );
}
