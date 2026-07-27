import RegisterPanel from "@/features/auth/components/register-form/RegisterPanel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create your Athlo account to start shopping.",
  robots: {
    index: false,
    follow: false,
  },
};

function RegisterPage() {
  return (
    <section className="flex items-center w-full min-h-dvh">
      <RegisterPanel />
    </section>
  );
}

export default RegisterPage;
