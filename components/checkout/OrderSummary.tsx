import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import Icon from "../shared/Icon";
import { Button } from "../ui/button";
import { products } from "../products/ProductsGrid";
import Link from "next/link";
import endpoints from "@/lib/endpoints";

function OrderSummary() {
  const items = products.slice(0, 3);

  return (
    <div className="">
      <Card className="sticky top-24 bg-card border-subtle">
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>

        <CardContent className="space-y-md">
          <div className="space-y-sm max-h-64 overflow-y-auto">
            {items.map((item) => (
              <div
                // key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                key={item.id}
                className="flex gap-sm"
              >
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                  width={64}
                  height={64}
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {/* {item.size} / {item.color} × {item.quantity} */}
                    size: M, color: Black, quantity: 2
                  </p>
                  <p className="font-semibold text-sm text-accent-base">
                    {/* {item.price * item.quantity} */}
                    total= 66
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Separator />

          <div className="space-y-xs">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>Subtotal</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span>Free</span>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span className="text-accent-base">Total</span>
            </div>
          </div>

          <Button type="submit" className="main-button">
            <Icon
              name="ShieldCheck"
              className="w-4 h-4 me-xs text-primary-dark"
            />
            Place Order
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            By clicking &apos;Place Order&apos;, you agree to our{" "}
            <Link
              href={endpoints.terms}
              className="hover:text-accent-base transition-color duration-normal"
            >
              Terms of Service{" "}
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default OrderSummary;
