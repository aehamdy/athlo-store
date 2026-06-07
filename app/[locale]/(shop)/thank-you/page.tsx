import ActionButtons from "@/features/thankyou/components/ActionButtons";
import OrderNumberCard from "@/features/thankyou/components/OrderNumberCard";
import OrderTimeline from "@/features/thankyou/components/OrderTimeline";
import SuccessIcon from "@/features/thankyou/components/SuccessIcon";
import SuccessMessage from "@/features/thankyou/components/SuccessMessage";
import SupportInfo from "@/features/thankyou/components/SupportInfo";

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
