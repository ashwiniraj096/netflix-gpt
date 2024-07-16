import { useState } from "react";
import { SIGN_IN_BG_IMAGE } from "../utils/constants";
import Logo from "./Logo";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  return (
    <>
      <Logo />
      <div className="absolute">
        <img src={SIGN_IN_BG_IMAGE} alt="Sign-In BG-Image" />
      </div>
      <form className="bg-white absolute w-4/12 p-12 mx-auto my-36 right-0 left-0 bg-black bg-opacity-80 text-white">
        <h1 className="text-white font-bold text-3xl mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-2 p-4 w-full border border-gray-400 rounded-lg bg-gray-700 text-white font-semibold"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="my-2 p-4 w-full border border-gray-400 rounded-lg bg-gray-700 text-white font-semibold"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-2 p-4 w-full border rounded-lg border-gray-400 bg-gray-700"
        />
        <button className="my-2 p-3 w-full bg-red-700 rounded-lg text-white font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn ? (
          <h3 className="m-2">
            New to Netflix?
            <span
              className=" hover:underline underline-offset-4"
              onClick={() => setSignIn(false)}
            >
              {" "}
              Sign Up now!!
            </span>
          </h3>
        ) : (
          <h3 className="m-2">
            Already a user?
            <span
              className=" hover:underline underline-offset-4"
              onClick={() => setSignIn(true)}
            >
              {" "}
              Sign In now!!
            </span>
          </h3>
        )}
      </form>
    </>
  );
};

export default Login;
