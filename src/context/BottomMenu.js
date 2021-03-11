import React, { createContext, useState } from "react";

export const BottomMenuContext = createContext({});

export default function BottomMenuProvider({ children }) {
  const [page, setPage] = useState("HomeFeed");

  return (
    <BottomMenuContext.Provider value={{ page, setPage }}>
      {children}
    </BottomMenuContext.Provider>
  );
}
