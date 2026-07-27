import LoginPanel from "@/features/auth/components/login-form/LoginPanel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your Athlo account.",
  robots: {
    index: false,
    follow: false,
  },
};

function LoginPage() {
  return (
    <main className="h-dvh">
      <LoginPanel />
    </main>
  );
}

export default LoginPage;
