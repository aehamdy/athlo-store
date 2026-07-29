import appConfig from "@/config/appConfig";
import ForgotPasswordForm from "@/features/forgot-password/components/ForgotPasswordForm";
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
    <section className="h-dvh">
      <ForgotPasswordForm />
    </section>
  );
}

export default ForgotPasswordPage;
