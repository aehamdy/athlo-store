import appConfig from "@/config/appConfig";
import ResetPassword from "@/features/reset-password/components/ResetPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Reset Password`,
  description: `Create a new password to securely regain access to your ${appConfig.siteName} account.`,
  robots: {
    index: false,
    follow: false,
  },
};

function ResetPasswordPage() {
  return (
    <section>
      <ResetPassword />
    </section>
  );
}

export default ResetPasswordPage;
