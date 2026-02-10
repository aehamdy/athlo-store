import Icon from "../shared/Icon";
import { Card, CardContent } from "../ui/card";

function OrderTimeline() {
  return (
    <Card className="w-full mb-3xl bg-card border-subtle animate-fade-in">
      <CardContent className="p-xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center flex-1">
            <div className="flex items-center justify-center w-10 h-10 mb-xs bg-accent-base rounded-full">
              <Icon name="CheckCircle" className="h-5 w-5 text-primary-dark" />
            </div>

            <p className="font-medium text-xs text-center">Confirmed</p>
          </div>

          <div className="flex-1 h-0.5 mx-xs bg-subtle" />

          <div className="flex flex-col items-center flex-1">
            <div className="flex items-center justify-center w-10 h-10 mb-xs bg-muted rounded-full">
              <Icon name="Package" className="h-5 w-5 text-muted-foreground" />
            </div>

            <p className="text-xs text-center text-muted-foreground">
              Processing
            </p>
          </div>

          <div className="flex-1 h-0.5 mx-xs bg-subtle" />

          <div className="flex flex-col items-center flex-1">
            <div className="flex items-center justify-center w-10 h-10 mb-xs bg-muted rounded-full">
              <Icon name="Truck" className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="text-center text-xs text-muted-foreground">Shipped</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default OrderTimeline;
