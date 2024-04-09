"use client";

import { useEffect, useState } from "react";
import style from "./Login.module.css";
import { useRouter } from "next/navigation";
import Modal from "../Modal/Modal";
import { sendVerificationEmail } from "@/utils/functional-utils/verification-email-utils";
import { matchToken } from "@/utils/functional-utils/match-token-utils";
import {
  Signup,
  autoLogin,
  login,
} from "@/utils/functional-utils/user-login-utils";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [companyName, setCompanyname] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [token, setToken] = useState("");
  const [emailEntered, setEmailEntered] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [signupSuccesfull, setSignupSuccesfull] = useState(false);
  const [loginSuccesfull, setLoginSuccesfull] = useState(false);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState(null);
  const router = useRouter();
  const [responseMessage, setResponseMessage] = useState("");
  const [type, setType] = useState("");
  const [routeName, setRouteName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      login(
        email,
        password,
        setLoading,
        setLoginSuccesfull,
        setType,
        setResponseMessage,
        (role) => {
          if (role === "admin") {
            // router.push('/admin/home');
            setRouteName("/admin/home");
            setLoading(false);
          } else if (role === "student") {
            // router.push('/student/home');
            setRouteName("/student/home");

            setLoading(false);
          } else if (role === "company") {
            // router.push('/company/home');
            setRouteName("/company/home");
            setLoading(false);
          }
        }
      );
      setType("");
      setResponseMessage("");
    } else {
      if (!emailEntered) {
        sendVerificationEmail(
          email,
          setLoading,
          setEmailEntered,
          setType,
          setResponseMessage
        );
        setType("");
        setResponseMessage("");
      } else if (emailEntered && !emailVerified) {
        matchToken(
          email,
          token,
          setLoading,
          setEmailVerified,
          setType,
          setResponseMessage
        );
        setType("");
        setResponseMessage("");
      } else if (emailEntered && emailVerified) {
        let name = isChecked ? companyName : username;
        let role = isChecked ? "company" : "student";
        setType("");
        setResponseMessage("");
        Signup(
          email,
          username,
          name,
          password,
          role,
          setLoading,
          setSignupSuccesfull,
          setType,
          setResponseMessage,
          (role) => {
            if (role === "student") {
              setLoading(false);
              setType("");
              setResponseMessage("");
              setIsLogin(true);
            } else if (role === "company") {
              setLoading(false);
              setType("");
              setResponseMessage("");
              setIsLogin(true);
            }
          }
        );
      }
    }
  };
  useEffect(() => {
    autoLogin(setLoading, (role) => {
      if (role === "student") {
        router.push("/student/home");
      } else if (role === "company") {
        router.push("/company/home");
      } else if (role === "admin") {
        router.push("/admin/home");
      }
    });
  }, []);
  const [textIndex, setTextIndex] = useState(0);

  const images = [
    "/Assets/Landing/1.jpg",
    "/Assets/Landing/2.jpg",
    "/Assets/Landing/3.jpg",
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="bg-gray-700 py-12 md:h-screen">
      <Modal
        loading={loading}
        type={type}
        message={responseMessage}
        route={routeName}
      >
        <div>
          <h1
            className={`text-5xl lg:text-6xl font-bold mb-12 text-center text-gray-50 ${style.heading}`}
          >
            Campus Recruitment Sytem
          </h1>
          <div className="grid sm:grid-cols-1 lg:sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 2xl:md:grid-cols-2 ">
            <div className="flex-1 bg-gray-100 p-10 h-auto flex flex-row items-center">
              <img
                src={images[textIndex]}
                alt="Your Image"
                className="w-full h-auto opacity-70 "
              />
            </div>
            <div className="flex-1  p-6 sm:px-16 w-full">
              <form onSubmit={handleSubmit} className="w-full  lg:w-8/12  ">
                <h2 className="text-2xl lg:text-5xl font-bold mb-4 text-gray-50">
                  {isLogin ? "Login" : "Sign Up"}
                </h2>
                {!isLogin && emailVerified && (
                  <div className="mb-4">
                    <label
                      htmlFor="username"
                      className="block text-gray-400 text-sm font-bold mb-2"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                )}

                {isLogin ? (
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-400 text-sm font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                ) : (
                  !emailEntered && (
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-400 text-sm font-bold mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                  )
                )}

                {!isLogin && emailEntered && !emailVerified && (
                  <div className="mb-4">
                    <label
                      htmlFor="username"
                      className="block text-gray-400 text-sm font-bold mb-2"
                    >
                      (We have sent you a verification email @ {email} enter
                      that token below)
                    </label>
                    <input
                      type="text"
                      id="token"
                      value={token}
                      placeholder="token"
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const numericInput = inputValue.replace(/[^0-9]/g, "");
                        setToken(numericInput);
                      }}
                      maxLength={6}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                )}

                {isLogin ? (
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block text-gray-400 text-sm font-bold mb-2"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                ) : (
                  emailVerified && (
                    <div className="mb-6">
                      <label
                        htmlFor="password"
                        className="block text-gray-400 text-sm font-bold mb-2"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                  )
                )}

                {!isLogin && emailVerified && isChecked && (
                  <div className="mb-4">
                    <label
                      htmlFor="companyname"
                      className="block text-gray-400 text-sm font-bold mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyname"
                      value={companyName}
                      onChange={(e) => setCompanyname(e.target.value)}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                )}

                {!isLogin && emailVerified && (
                  <div className="mb-4">
                    <label htmlFor="terms" className="flex items-center">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        className="mr-2 leading-tight"
                      />
                      <span className="text-sm text-gray-400">
                        I am a company
                      </span>
                    </label>
                  </div>
                )}

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 lg:text-2xl rounded focus:outline-none focus:shadow-outline"
                >
                  {isLogin
                    ? "Login"
                    : !emailEntered
                    ? "Next"
                    : emailEntered && !emailVerified
                    ? "VerifyEmail"
                    : emailEntered && emailVerified && "signin"}
                </button>
              </form>
              <p className="mt-4 text-gray-50">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-blue-500 hover:underline focus:outline-none"
                >
                  {isLogin ? "Sign Up" : "Login"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
