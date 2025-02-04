/* eslint-disable react/prop-types */
import { createContext } from "react";

const RouterProvider = ({ children }) => {
  const authContext = createContext();

  const user = "jahid";
  const authInfo = {
    user,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default RouterProvider;
