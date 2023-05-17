"use client";
import React from "react";
import signIn from "/firebase/auth/signin";
import { useRouter } from "next/navigation";
import Link from "next/link";

function LoginForm() {
  const [error, setError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    // Reset the error before trying to submit the form
    if (error) setError("");

    const { signedInUser, signedInUserError } = await signIn(email, password);

    if (signedInUserError) {
      console.log(signedInUserError);
      setError(signedInUserError);
      return;
    } else if (signedInUser) {
      console.log(signedInUser);
      return router.push("/");
    } else {
      setError(
        "Sorry we are experiencing technical difficulties right now. Please try again later."
      );
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
        <p style={{ color: "red" }}>{error}</p>
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
}

export default LoginForm;
