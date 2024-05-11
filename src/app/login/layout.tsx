import { UnAuthenticationLayout } from "@/components/layouts/UnAuthenticationLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UnAuthenticationLayout>{children}</UnAuthenticationLayout>
    </>
  );
}
