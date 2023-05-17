import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth();
const errorCodeMessage = new Map([
  [
    "auth/account-exists-with-different-credential",
    "There is already an Account associated with this crendetial",
  ],
  ["auth/email-already-in-use", "Email already in use"],
  ["auth/invalid-email", "Invalid email"],
  ["auth/operation-not-allowed", "Sign up method currently not supported"],
  ["auth/weak-password", "Weak password"],
  [
    "auth/user-disabled",
    "User currently disabled please contact technical support at admin@gulfstreamvoyages.com",
  ],
  ["auth/user-not-found", "User not found"],
  ["auth/wrong-password", "Incorrect password"],
  ["auth/invalid-verification-code", "Invalid Verification Code"],
  ["auth/invalid-verification-id", "Invalid Verification Id"],
  ["auth/invalid-credential", "Expired credentials"],
]);

export default async function signIn(email, password) {
  var signedInUser = null;
  var signedInUserError = null;

  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      signedInUser = user.uid;
      console.log(auth.currentUser);
    })
    .catch((error) => {
      const errorCode = error.code;
      signedInUserError =
        errorCodeMessage.get(errorCode) != null
          ? errorCodeMessage.get(errorCode)
          : errorCode;
    });
  return { signedInUser, signedInUserError };
}
