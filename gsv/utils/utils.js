import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import User from "../models/User";

export function GetCurrentURL() {
  return window.location.href;
}

export function GetCurrentURLPath() {
  return window.location.pathname;
}

export const AdminPage = () => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  let adminPagePathRoot = "vendor-dashboard";
  if (user != null && user.uid != null && typeof window !== "undefined") {
    if (User == null) {
      new User();
    }
    console.log(User.admin);
    if (User.admin != true && router.pathname.includes(adminPagePathRoot)) {
      return router.push("/");
    } else {
      return true;
    }
  } else {
    return false;
  }
};

export const GetUserData = () => {
  const [user, loading, error] = useAuthState(auth);
  if (user && user.uid && typeof window !== "undefined") {
    const result = getData("users", user.uid);
  }
};
