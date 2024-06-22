import React, { useState, useRef } from "react";
import Background from "./Background";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { ValidateEmail, ValidatePassword } from "../utils/validate";
import { auth } from "../utils/authentication";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constants";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmail = ValidateEmail(email.current.value);
    const checkPassword = ValidatePassword(password.current.value);

    if (!checkEmail) {
      setErrorMessage("Provide a valid email");
      setTimerForErrorMessage();
      return;
    } else if (!checkPassword) {
      setErrorMessage(
        "Password should contain minimum 8 characters, at least 1 letter, one number and one special character"
      );
      setTimerForErrorMessage();
      return;
    } else {
      setErrorMessage(null);

      if (!isSignInForm) {
        // Sign Up Form
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("User signed up:", user);
            updateProfile(user, {
              displayName: userName.current.value
            }).then(() => {
              const {uid,email,displayName}=user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));
              navigate("/browse");
            }).catch((error) => {
              console.error("Profile update error:", error);
            });
          })
          .catch((error) => {
            setErrorMessage(
              "This email is already registered. Please sign in instead."
            );
            console.error("Sign up error:", error);
            setTimerForErrorMessage();
          });
      } else {
        // Sign In Form
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            navigate("/browse");
          })
          .catch((error) => {
            setErrorMessage("User Not Found, Sign Up First");
            console.error("Sign in error:", error);
            setTimerForErrorMessage();
          });
      }
    }
  };

  const setTimerForErrorMessage = () => {
    const timer = setTimeout(() => {
      setErrorMessage(null);
    }, 3000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="bg-[#0a0a0a]">
      <div className="relative min-h-screen">
        <Background />
        <div className="absolute lg:mx-36 md:mx-24 mx-6 top-0 left-0 p-4 items-center justify-between z-10">
          <img
            src={LOGO}
            alt="Logo"
            className="lg:h-10 md:h-8 h-6"
          />
        </div>
        <div className="absolute inset-0 bg-black sm:pt-0 pt-10 sm:bg-opacity-60">
          <form
            onSubmit={handleSubmit}
            className="sm:w-full sm:max-w-[400px] sm:px-12 px-4 sm:pb-24 pt-16 text-white rounded-md bg-black bg-opacity-75 sm:mx-auto sm:my-16 mx-4"
          >
            <h1 className="font-bold text-4xl mb-12">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                ref={userName}
                className="w-full sm:mb-5 mb-7 py-3 bg-black bg-opacity-50 px-3 border border-white rounded"
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              ref={email}
              className="w-full sm:mb-5 mb-7 py-3 bg-black bg-opacity-50 px-3 border border-white rounded"
              type="text"
              placeholder="Email"
            />
            <input
              ref={password}
              className="w-full sm:mb-5 mb-7 py-3 bg-black bg-opacity-50 px-3 border border-white rounded"
              type="password"
              placeholder="Password"
            />
            {errorMessage && (
              <p className="text-red-500 text-wrap">{errorMessage}</p>
            )}
            <button
              type="submit"
              className="w-full py-2 hover:bg-red-800 my-4 bg-red-600 rounded text-white font-semibold"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="mt-4 text-gray-400 text-center">
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setIsSignInForm(!isSignInForm);
                  email.current.value = "";
                  password.current.value = "";
                  setErrorMessage(null);
                }}
                className="text-white cursor-pointer hover:text-red-500"
              >
                {isSignInForm ? "Sign Up Now" : "Sign In Now"}
              </span>
            </p>
            <Link to="/">
              <p className="mt-5 text-blue-500 text-center">Go to Home Page</p>
            </Link>
          </form>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
