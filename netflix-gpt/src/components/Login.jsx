import { useRef, useState } from "react";
import { SIGN_IN_BG_IMAGE } from "../utils/constants";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { modifyErrorCode } from "../utils/commonFunctions";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errors, setErrors] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [authSuccess, setAuthSuccess] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
  }

  const handleFormValidation = () => {
    let errorsObject = {};
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    if (isSignIn) {
      //Sign In setup
      errorsObject = validate({
        email: emailValue,
        password: passwordValue,
      });
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          setAuthError(null);
          setAuthSuccess("User Signed In Successfully");
        })
        .catch((error) => {
          setAuthError(modifyErrorCode(error.code));
          setAuthSuccess(null);
        });
    } else {
      //Sign Up setup
      errorsObject = validate(
        {
          email: emailValue,
          password: passwordValue,
          userName: userName.current.value,
        },
        true
      );
      setErrors(errorsObject);
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4",
          })
            .then(() => {
              console.info("User SignedIn");
            })
            .catch((error) => {
              console.error("Error during SignUp", error.code);
              //  setErrorMessage(error.message);
            });
          setAuthError(null);
          setAuthSuccess("User Signed Up Successfully");
        })
        .catch((error) => {
          const errorCode = error.code;
          setAuthSuccess(null);
          setAuthError(modifyErrorCode(errorCode));
        });
    }
  };

  return (
    <>
      <Header />
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
        {authError && (
          <p className="text-red-600 text-sm font-semibold">{authError}</p>
        )}
        {authSuccess && (
          <p className="text-green-500 text-sm font-semibold">{authSuccess}</p>
        )}
        {isSignIn ? (
          <h3 className="m-2">
            New to Netflix?
            <span
              className=" hover:underline underline-offset-4"
              onClick={() => {
                setSignIn(false);
                setAuthError(null);
                setAuthSuccess(null);
              }}
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
              onClick={() => {
                setSignIn(true);
                setAuthError(null);
                setAuthSuccess(null);
              }}
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
