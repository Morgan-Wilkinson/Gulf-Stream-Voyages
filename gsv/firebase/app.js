import { initializeApp } from "firebase/app";
import getData from "./firestore/getData";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  doc,
  where,
  addDoc,
  setDoc,
} from "firebase/firestore";

const errorCodeMessage = new Map([
  [
    "auth/account-exists-with-different-credential",
    "There is already an Account associated with this credential",
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
  [
    "auth/too-many-requests",
    "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.",
  ],
]);

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const signInWithGoogle = async () => {
  var result;
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await updateProfile(auth.currentUser, {
        displayName: user.displayName,
      });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        role: "customer",
      }).then(() => {
        getData("users", user.uid);
      });
    }
  } catch (err) {
    console.error(err);
    result = { status: false, error: errorCodeMessage.get(err.code) };
    return result;
  }
};
const signInWithFacebook = async () => {
  var result;
  try {
    const res = await signInWithPopup(auth, facebookProvider);
    const user = res.user;
    const q = query(doc(db, "users"), where("uid", "==", user.uid));
    console.log(q);

    const docs = await getDocs(q);
    console.log(docs);
    if (docs.docs.length === 0) {
      await updateProfile(auth.currentUser, {
        displayName: user.displayName,
      });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        role: "customer",
      }).then(() => {
        getData("users", user.uid);
      });
    }
  } catch (err) {
    console.error(err);
    result = { status: false, error: errorCodeMessage.get(err.code) };
    return result;
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  var result;
  try {
    await signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        getData("users", userCredential.user.uid);
      }
    );
  } catch (err) {
    console.error(err);
    result = { status: false, error: errorCodeMessage.get(err.code) };
    return result;
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  var result;
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      role: "customer",
    }).then(() => {
      getData("users", user.uid);
    });
  } catch (err) {
    console.error(err);
    result = { status: false, error: errorCodeMessage.get(err.code) };
    return result;
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(errorCodeMessage.get(err.code));
  }
};
const logout = () => {
  signOut(auth);
  localStorage.clear();
};
export {
  auth,
  db,
  signInWithGoogle,
  signInWithFacebook,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
