import React, { useState, useRef } from "react";
import Background from "./Background";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { ValidateEmail, ValidatePassword } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/authentication";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmail = ValidateEmail(email.current.value);
    const checkPassword = ValidatePassword(password.current.value);

    if (!checkEmail) {
      setErrorMessage("Provide a Valid email");
    } else if (!checkPassword) {
      setErrorMessage(
        "Password should contain minimum 8 characters, at least 1 letter, one number and one special character"
      );
    } else {
      setErrorMessage(null);

      if (!isSignInForm) {
        // Sign Up Form
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // console.log(user);
          })
          .catch((error) => {
            setErrorMessage(
              "This email is already registered. Please sign in instead."
            );
          });
      } else {
        // Sign In Form
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            setErrorMessage("User Not Found , Sign Up First");
          });
      }
      navigate("/browse");
    }
    const timer = setTimeout(() => {
      setErrorMessage(null);
    }, 3000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="bg-[#0a0a0a]">
      <div className="relative min-h-screen">
        <Background />
        <div className="absolute lg:mx-36 md:mx-24 mx-4 top-0 left-0 p-4 items-center justify-between z-10">
          <img
            src="https://i.ibb.co/r5krrdz/logo.png"
            alt="Logo"
            className="lg:h-10 md:h-8 h-6"
          />
        </div>
        <div className="absolute inset-0 bg-black sm:pt-0 pt-10 sm:bg-opacity-60">
          <form
            onSubmit={handleSubmit}
            className=" sm:w-full sm:max-w-[400px]  sm:px-12 px-4 sm:pb-24 pt-16 text-white rounded-md bg-black bg-opacity-75 sm:mx-auto sm:my-16 mx-4"
          >
            <h1 className="font-bold text-4xl mb-12">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
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
            {errorMessage !== null && (
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
                className="text-white cursor-pointer hover:text-red-500 "
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
