import appConfig from "@/config/appConfig";
import VerifyCode from "@/features/verify-code/components/VerifyCode";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Code",
  description: `Reset your ${appConfig.name} account password if you've forgotten it.`,
  robots: {
    index: false,
    follow: false,
  },
};

function VerifyCodePage() {
  return (
    <section className="flex justify-center items-center h-dvh">
      <VerifyCode />
    </section>
  );
}

export default VerifyCodePage;
