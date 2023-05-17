"use client";
//import "./globals.css";
import { AuthContextProvider } from "../../context/AuthContext";

const Wrapper = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default Wrapper;
