import appConfig from "@/config/appConfig";
import ForgotPasswordForm from "@/features/forms/ForgotPasswordForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: `Reset your ${appConfig.name} account password if you've forgotten it.`,
  robots: {
    index: false,
    follow: false,
  },
};

function ForgotPasswordPage() {
  return (
    <main className="h-dvh">
      <ForgotPasswordForm />
    </main>
  );
}

export default ForgotPasswordPage;
