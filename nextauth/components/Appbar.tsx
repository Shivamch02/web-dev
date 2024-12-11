"use client";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
export const Appbar = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          signIn();
        }}
      >
        Signin
      </button>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
};
