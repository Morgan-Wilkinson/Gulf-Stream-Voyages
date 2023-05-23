import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import getData from "/firebase/firestore/getData";

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
  if (user && user.uid) {
    const result = getData("users", user.uid);

    if (
      result != null &&
      result.role != "admin" &&
      router.pathname.includes(adminPagePathRoot)
    ) {
      return router.push("/");
    } else {
      return true;
    }
  } else {
    return false;
  }
};
