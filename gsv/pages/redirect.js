import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../../firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import getData from "/firebase/firestore/getData";

// Method to get page url of origin - Probably fed in as a prop

// Method to get intended destination url - Probably fed in as a prop

// Method to check credentials. Ensure user is logged in, query database to see if they are a admin
// If they are continue navigation to intended destination. If they are not authorized return them to the origin url.

function Redirect({ destinationUrl }) {
  console.log(originUrl);
  console.log(destinationUrl);
  return <></>;
}

export default dynamic(() => Promise.resolve(Redirect), { ssr: false });
