"use client";
import axios from "axios";
import Cookies from "js-cookie";
import {
  baseUrl,
  headersFunction,
} from "../project-variable-utils/project-utils";
export const login = async (
  email,
  password,
  setLoading,
  setLoginSuccesfull,
  setType,
  setResponseMessage,
  callback
) => {
  setLoading(true);

  try {
    const response = await axios.post(`${baseUrl}/login`, {
      email,
      password,
    });

    if (response.status === 200) {
      setLoginSuccesfull(true);
      Cookies.set("token", response.data.token);
      setResponseMessage(response.data.message);
      setType("success");

      if (callback) {
        callback(response.data.role);
      }
    }
  } catch (error) {
    setLoginSuccesfull(false);
    setLoading(false);
    // alert(error.response.data.message)
    setType("failed");
    setResponseMessage(error.response.data.message);
  }
};

export const Signup = async (
  email,
  username,
  name,
  password,
  role,
  setLoading,
  setSignupSuccesfull,
  setType,
  setResponseMessage,
  callback
) => {
  setLoading(true);
  try {
    const response = await axios.post(`${baseUrl}/signup`, {
      email,
      username,
      name,
      password,
      role,
    });

    if (response.status === 200) {
      setSignupSuccesfull(true);
      Cookies.set("token", response.data.token);
      setResponseMessage(response.data.message);
      setType("success");
      if (callback) {
        callback(response.data.role);
      }
    }
  } catch (error) {
    setLoading(false);
    setSignupSuccesfull(false);
    setResponseMessage(error.response.data.message);
    setType("failed");
  }
};

export const autoLogin = async (setLoading, callback) => {
  try {
    const token = Cookies.get("token");
    setLoading(true);
    const response = await axios.get(
      `${baseUrl}/authenticate`,
      headersFunction()
    );
    if (response.status === 200) {
      if (callback) {
        callback(response.data.role);
      }
    }
  } catch (error) {
    setLoading(false);
  }
};
