"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, CreateUserAndSendPasswordReset } from "../../../../firebase/app";
import Select from "react-select";

function InternalUserForm() {
  const router = useRouter();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("");
  const [shownError, setError] = React.useState("");
  const [shownSuccess, setSuccess] = React.useState("");
  const [user, loading, error] = useAuthState(auth);
  const userRoles = [
    { value: "admin", label: "Admin" },
    { value: "internal", label: "Internal" },
  ];
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

    if (role == "") {
      setError("Please select a role!");
      return;
    }

    CreateUserAndSendPasswordReset(firstName + " " + lastName, email, role)
      .then((result) => {
        console.log(result);
        setSuccess(
          "User " +
            firstName +
            " " +
            lastName +
            " succesfully created! Please check your mailbox " +
            email +
            " for your password reset link. You'll need reset you're password first to log in!"
        );
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <form onSubmit={handleForm} className="form row y-gap-20">
      <div className="d-flex align-items-center">
        <div className="col-3 d-inline-block">
          <h1 className="text-22 fw-500">User Account Type</h1>
        </div>
        <div className="col-3 d-inline-block">
          <Select placeholder="Roles" onChange={setRole} options={userRoles} />
        </div>
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

      <div>
        <p style={{ color: "red" }}>{shownError}</p>
      </div>
      <div>
        <p style={{ color: "green" }}>{shownSuccess}</p>
      </div>
      {/*Error Message*/}
      <div className="col-12">
        <button
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Create User and Send Reset Password
          <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
}

export default InternalUserForm;
