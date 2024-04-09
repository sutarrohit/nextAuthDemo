import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";

const ServerSessionComponent = async () => {
  // Get server side session
  const session = await getServerSession(authOptions);
  console.log("Server Session", session);
  return <div></div>;
};

export default ServerSessionComponent;
