import axios from "axios";
import React from "react";

const useAxiosSecure = () => {
  const instance = axios.create({
    baseURL: "https://next-js-server-inky.vercel.app",
  });
  return instance;
};

export default useAxiosSecure;
