"use client";
import { RegisterForm } from "@/components/RegisterForm";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function RegisterPage() {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (currentUser) {
      router.push("/");
    }
  }, [currentUser]);
  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-gray700 font-sans-serif relative">
      <RegisterForm />
    </ScanLayout>
  );
}
