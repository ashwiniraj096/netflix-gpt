import { useRef, useState } from "react";
import { SIGN_IN_BG_IMAGE } from "../utils/constants";
import Logo from "./Logo";
import { validate } from "../utils/validate";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  //error => [{type:"email", message:"errorMessage"}] => error.find(ele => ele.type === "error")
  const [errors, setErrors] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
  }

  const handleFormValidation = () => {
    let errorsObject = {};
    if (isSignIn) {
      errorsObject = validate({
        email: email.current.value,
        password: password.current.value,
      });
    } else {
      errorsObject = validate(
        {
          email: email.current.value,
          password: password.current.value,
          userName: userName.current.value,
        },
        true
      );
    }
    setErrors(errorsObject);
  };

  return (
    <>
      <Logo />
      <div className="absolute w-full">
        <img src={SIGN_IN_BG_IMAGE} alt="Sign-In BG-Image" />
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" absolute w-4/12 p-12 mx-auto my-36 right-0 left-0 bg-black bg-opacity-80 text-white"
      >
        <h1 className="text-white font-bold text-3xl mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <>
            <input
              ref={userName}
              type="text"
              placeholder="Full Name"
              className="my-2 p-4 w-full border border-gray-400 rounded-lg bg-gray-700 text-white font-semibold"
            />
            {errors?.userName && (
              <p className="text-red-600 text-sm font-semibold">
                {errors?.userName}
              </p>
            )}
          </>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="my-2 p-4 w-full border border-gray-400 rounded-lg bg-gray-700 text-white font-semibold"
        />
        {errors?.email && (
          <p className="text-red-600 text-sm font-semibold">{errors?.email}</p>
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-2 p-4 w-full border rounded-lg border-gray-400 bg-gray-700"
        />
        {errors?.password && (
          <p className="text-red-600 text-sm font-semibold">
            {errors?.password}
          </p>
        )}
        <button
          className="my-2 p-3 w-full bg-red-700 rounded-lg text-white font-bold"
          onClick={handleFormValidation}
        >
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
