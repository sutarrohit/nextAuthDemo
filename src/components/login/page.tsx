"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Login() {
  // Get client side session
  const { data: session, status } = useSession();
  console.log("Client Session", session);
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      {status === "authenticated" ? (
        <div>
          <div>Congratulation You are Singed In </div>
          <div className=" text-center"> {session.user?.name}</div>
        </div>
      ) : (
        <div>
          <div>Click Sign In Button to get Authenticated</div>
        </div>
      )}

      <div>
        {session ? (
          <Button className="border py-2 px-20 rounded-lg bg-red-400" onClick={() => signOut()}>
            Sign Out
          </Button>
        ) : (
          <Button className="border py-2 px-20 rounded-lg bg-green-500" onClick={() => signIn()}>
            Sign In
          </Button>
        )}
      </div>
    </div>
  );
}
