import OrderNumberCard from "@/components/thankyou/OrderNumberCard";
import SuccessIcon from "@/components/thankyou/SuccessIcon";
import SuccessMessage from "@/components/thankyou/SuccessMessage";
import ActionButtons from "@/components/thankyou/ActionButtons";
import OrderTimeline from "@/components/thankyou/OrderTimeline";
import SupportInfo from "@/components/thankyou/SupportInfo";

function ThankYouPage() {
  return (
    <main className="section-spacing">
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-md w-full lg:w-1/2">
          <SuccessIcon />

          <SuccessMessage />

          <OrderNumberCard />

          <OrderTimeline />

          <ActionButtons />

          <SupportInfo />
        </div>
      </div>
    </main>
  );
}

export default ThankYouPage;
