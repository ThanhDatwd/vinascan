"use client";
import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";
import { LoadingSpinner } from "../LoadingSpinner";
import { ACCESS_TOKEN } from "@/services/AuthServices";
export const UnAuthenticationLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { currentUser, getCurrentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem(ACCESS_TOKEN);

      if (accessToken) {
        fetchUser();
      } 
    }
  }, []);

  const fetchUser = async () => {
    const user = await getCurrentUser();
    if (user) {
      router.replace("/");
    }
  };

  return (
    <>
      {!currentUser ? (
        children
      ) : (
        <div className="h-screen flex justify-center items-center w-screen">
          <div className="w-10 h-10">
            <LoadingSpinner />
          </div>
        </div>
      )}
    </>
  );
};
