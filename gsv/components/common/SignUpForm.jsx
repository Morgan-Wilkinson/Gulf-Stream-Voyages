"use client";
import React from "react";
import signUp from "/firebase/auth/signup";
import addData from "/firebase/firestore/addData";
import { useRouter } from "next/navigation";
import Link from "next/link";

function SignUpForm() {
  const [error, setError] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmationPassword, setConfirmationPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    // Reset the error before trying to submit the form
    if (error) setError("");

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
    const { newUser, newUserError } = await signUp(email, password);

    if (newUserError) {
      console.log(newUserError);
      setError(newUserError);
      return;
    } else if (newUser) {
      console.log(newUser);
      const newUserData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        role: "customer",
      };
      const { dataResult, dataError } = await addData(
        "users",
        newUser,
        newUserData
      );
      if (dataError) {
        console.log(dataError);
        setError(dataError);
        return;
      } else {
        console.log(dataResult);
      }
    }

    // else successful
    return router.push("/");
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
        <p style={{ color: "red" }}>{error}</p>
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
