import React, { createContext, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Context = createContext({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState(false)
  const value = { contextValue, setContextValue };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
