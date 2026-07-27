import appConfig from "@/config/appConfig";
import ThankYou from "@/features/thankyou/components/ThankYou";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description: `Thank you for shopping with ${appConfig.name}. Your order has been received successfully.`,
  robots: {
    index: false,
    follow: false,
  },
};

function ThankYouPage() {
  return (
    <main className="main-page">
      <ThankYou />
    </main>
  );
}

export default ThankYouPage;
