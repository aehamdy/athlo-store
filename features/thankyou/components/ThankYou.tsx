import { Card } from "@/components/ui/card";
import SuccessIcon from "./SuccessIcon";
import SuccessMessage from "./SuccessMessage";
import ActionButtons from "./ActionButtons";
import SupportInfo from "./SupportInfo";

function ThankYou() {
  return (
    <section className="flex justify-center">
      <div className="lg:w-1/2">
        <Card className="flex flex-col items-center">
          <div className="flex flex-col items-center w-9/10">
            <SuccessIcon />
            <SuccessMessage />
            <ActionButtons />
            <SupportInfo />
          </div>
        </Card>
      </div>
    </section>
  );
}

export default ThankYou;
