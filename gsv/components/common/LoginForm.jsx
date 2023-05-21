"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const LoginForm = () => {
  const router = useRouter();
  const auth = getAuth();
  const [shownError, setError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, loading, error] = useAuthState(auth);
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

  const handleForm = async (event) => {
    event.preventDefault();

    // Reset the error before trying to submit the form
    if (error) setError("");
    if (shownError) setError("");

    try {
      const signInResult = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(signInResult.user.uid);
      return router.push("/");
    } catch (err) {
      if (errorCodeMessage.get(err.code) != null) {
        setError(errorCodeMessage.get(err.code));
      } else {
        setError(
          "Sorry we are experiencing technical difficulties right now. Please try again later."
        );
      }
      return;
    }
  };
  return (
    <form onSubmit={handleForm} className="form row y-gap-20">
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Don&apos;t have an account yet?{" "}
          <Link href="/signup" className="text-blue-1">
            Sign up for free
          </Link>
        </p>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            id="email"
          />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            name="password"
            id="password"
          />
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <a href="#" className="text-14 fw-500 text-blue-1 underline">
          Forgot your password?
        </a>
      </div>
      {/* End .col */}

      <div>
        <p style={{ color: "red" }}>{shownError}</p>
      </div>

      <div className="col-12">
        <button
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign In <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default LoginForm;
