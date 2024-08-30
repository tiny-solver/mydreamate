"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
export default function Home() {
  const { signOut } = useAuthActions();

  const clickedSignOut = async () => {
    console.log("you clicked signout");
    await signOut();
  }

  return (
    <div>
      You Logged in!
      <p>test</p>
      <Button onClick={() => clickedSignOut()}>Sign Out</Button>
    </div>
  );
}
