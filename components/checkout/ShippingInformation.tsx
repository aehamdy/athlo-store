import Icon from "../shared/Icon";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function ShippingInformation() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-md">
          <Icon name="Truck" size={24} className="text-accent-base" />
          Shipping Information
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-md">
        <div className="grid sm:grid-cols-2 gap-md">
          <div className="space-y-md">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              //   value={formData.firstName}
              //   onChange={handleInputChange}
              required
              className="bg-field border-subtle"
            />
          </div>

          <div className="space-y-xs">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              //   value={formData.lastName}
              //   onChange={handleInputChange}
              required
              className="bg-field border-subtle"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-md">
          <div className="space-y-xs">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              //   value={formData.email}
              //   onChange={handleInputChange}
              required
              className="bg-field border-subtle"
            />
          </div>
          <div className="space-y-xs">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              //   value={formData.phone}
              //   onChange={handleInputChange}
              required
              className="bg-field border-subtle"
            />
          </div>
        </div>

        <div className="space-y-xs">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            // value={formData.address}
            // onChange={handleInputChange}
            required
            className="bg-field border-subtle"
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-md">
          <div className="space-y-xs">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              //   value={formData.city}
              //   onChange={handleInputChange}
              required
              className="bg-field border-subtle"
            />
          </div>
          <div className="space-y-xs">
            <Label htmlFor="postalCode">Postal Code</Label>
            <Input
              id="postalCode"
              name="postalCode"
              //   value={formData.postalCode}
              //   onChange={handleInputChange}
              required
              className="bg-field border-subtle"
            />
          </div>
          <div className="space-y-xs">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              name="country"
              //   value={formData.country}
              //   onChange={handleInputChange}
              required
              className="bg-field border-subtle"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ShippingInformation;
