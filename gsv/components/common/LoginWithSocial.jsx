import { SignInWithGoogle, SignInWithFacebook } from "../../firebase/app";

const LoginWithSocial = () => {
  return (
    <>
      <div className="col-md-6 col-12">
        <button
          className="button col-12 -outline-blue-1 text-blue-1 py-15 rounded-8 "
          onClick={SignInWithFacebook}
        >
          <i className="icon-apple text-15 mr-10" />
          Facebook
        </button>
      </div>

      <div className="col-md-6 col-12">
        <button
          className="button col-12 -outline-red-1 text-red-1 py-15 rounded-8 "
          onClick={SignInWithGoogle}
        >
          <i className="icon-apple text-15 mr-10" />
          Google
        </button>
      </div>
    </>
  );
};

export default LoginWithSocial;
