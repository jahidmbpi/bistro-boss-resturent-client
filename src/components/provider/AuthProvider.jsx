/* eslint-disable react/prop-types */
import { createContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const logInUser = (email, password) => {
    console.log(email, password);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { logInUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
