import { getUserInfo } from "@/utils/authService";
import React from "react";

const myProfilePage = () => {
  const res = getUserInfo();
  console.log({ res });

  return <div>myProfilePage</div>;
};

export default myProfilePage;
