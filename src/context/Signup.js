import React, { createContext, useState } from "react";

export const SignupContext = createContext({});

export default function SignupProvider({ children }) {
  const [page, setPage] = useState("FirstPage");

  return (
    <SignupContext.Provider value={{ page, setPage }}>
      {children}
    </SignupContext.Provider>
  );
}
