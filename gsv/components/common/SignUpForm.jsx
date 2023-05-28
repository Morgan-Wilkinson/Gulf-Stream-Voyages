"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "../../firebase/app";

function SignUpForm() {
  const router = useRouter();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmationPassword, setConfirmationPassword] = React.useState("");
  const [shownError, setError] = React.useState("");
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

    // Check passwords match
    if (password !== confirmationPassword) {
      setError("Passwords do not match");
      return;
    }

    // Check password format
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,256}$/gm;

    if (!passwordRegex.test(password)) {
      setError(
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character."
      );
      return;
    }

    registerWithEmailAndPassword(
      firstName + " " + lastName,
      email,
      password
    ).then((result) => {
      if (auth.currentUser) {
        router.push("/");
      } else {
        setError(result.error);
      }
    });
  };

  return (
    <form onSubmit={handleForm} className="form row y-gap-20">
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Already have an account yet?{" "}
          <Link href="/login" className="text-blue-1">
            Log in
          </Link>
        </p>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input
            onChange={(e) => setFirstName(e.target.value)}
            required
            type="text"
            name="firstName"
            id="firstName"
          />
          <label className="lh-1 text-14 text-light-1">First Name</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input
            onChange={(e) => setLastName(e.target.value)}
            required
            type="text"
            name="lastName"
            id="lastName"
          />
          <label className="lh-1 text-14 text-light-1">Last Name</label>
        </div>
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
        <div className="form-input ">
          <input
            onChange={(e) => setConfirmationPassword(e.target.value)}
            required
            type="password"
            name="confirmationPassword"
            id="confirmationPassword"
          />
          <label className="lh-1 text-14 text-light-1">Confirm Password</label>
        </div>
      </div>
      {/* End .col */}

      <div>
        <p style={{ color: "red" }}>{shownError}</p>
      </div>
      {/*Error Message*/}
      <div className="col-12">
        <button
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign Up <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
}

export default SignUpForm;
