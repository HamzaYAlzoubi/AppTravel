"use client";
import { useState } from "react";
import { FaGoogle, FaSpinner } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

type LoginButtonProps = {
  url: string;
  type: "admin" | "client";
};

export default function LoginButton({ url, type }: LoginButtonProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    setIsLoading(true);
    const provider = type === "admin" ? "google-admin" : "google-client";
    await signIn(provider, { callbackUrl: url });
  };

  return (
    <Button
      onClick={handleLogin}
      variant="outline"
      className="w-full bg-blue-600 text-white flex justify-center items-center gap-2"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <FaSpinner className="animate-spin" />
          Loading...
        </>
      ) : (
        <>
          <FaGoogle />
          Sign in with Google
        </>
      )}
    </Button>
  );
}
