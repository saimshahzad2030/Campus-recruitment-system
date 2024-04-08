"use client";
import React, { useState, useEffect } from "react";
import style from "./Modal.module.css";
import { useRouter } from "next/navigation";
const Modal = ({ loading, type, message, route }) => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (loading) {
      setIsVisible(true);
    } else {
      const timeoutId = setTimeout(
        () => {
          if (route !== "" && message === "login successful") {
            router.push(route);
          } else {
            setIsVisible(false);
          }
        },
        !type ? 100 : 1500
      );
      return () => clearTimeout(timeoutId);
    }
  }, [loading]);
  return isVisible ? (
    <div
      className={`w-screen h-screen flex justify-center items-center ${
        type === "failed" ? "bg-black bg-opacity-30" : "bg-black bg-opacity-30"
      } ${style.main}`}
    >
      <div className="rounded-lg bg-white p-8">
        <div className="flex justify-center mb-4">
          {type !== "" && type === "failed" && (
            <img
              src="/Assets/response/failed.png"
              className="h-12 2-12"
              alt="success"
            />
          )}

          {type !== "" && type === "success" && (
            <img
              src="/Assets/response/success.png"
              className="h-12 2-12"
              alt="success"
            />
          )}
          {(type === "" || !type) && (
            <div className="rounded-full h-12 w-12 border-t-4 border-blue-500 animate-spin"></div>
          )}
        </div>
        <p className="text-center">{message}</p>
      </div>
    </div>
  ) : null;
};

export default Modal;
