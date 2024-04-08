"use client";
import axios from "axios";
import { baseUrl } from "../project-variable-utils/project-utils";
export const sendVerificationEmail = async (
  email,
  setLoading,
  setEmailEntered,
  setType,
  setResponseMessage
) => {
  setLoading(true);

  try {
    const response = await axios.post(`${baseUrl}/verificationemail`, {
      email: email,
    });

    if (response.status === 200) {
      setLoading(false);
      setEmailEntered(true);
      setType("success");
      setResponseMessage(response.data.message);
    }
  } catch (error) {
    setLoading(false);
    setType("failed");
    setResponseMessage(error.response.data.message);
  }
};
