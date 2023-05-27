import { initializeApp } from "firebase/app";
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
      });
    }
  } catch (err) {
    console.error(err);
    alert(errorCodeMessage.get(err.code));
  }
};
const signInWithFacebook = async () => {
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
      });
    }
  } catch (err) {
    console.error(err);
    alert(errorCodeMessage.get(err.code));
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(errorCodeMessage.get(err.code));
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
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
    });
  } catch (err) {
    console.error(err);
    alert(errorCodeMessage.get(err.code));
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
