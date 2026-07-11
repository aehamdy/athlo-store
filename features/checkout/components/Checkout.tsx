"use client";

import useCurrentUser from "@/features/profile/hooks/useCurrentUser";
import useFetchShippingMethods from "../hooks/useFetchShippingMethods";

import CheckoutForm from "./CheckoutForm";
import { ShippingMethod } from "../types";

function Checkout() {
  const {
    data: userResponse,
    isPending: isUserPending,
    isError: isUserError,
  } = useCurrentUser();

  const {
    data: shippingMethods = [],
    isPending: isShippingPending,
    isError: isShippingError,
  } = useFetchShippingMethods();

  if (isUserPending || isShippingPending) {
    return <div>Loading...</div>;
  }

  if (isUserError || !userResponse) {
    return <div>Failed to load profile.</div>;
  }

  if (isShippingError) {
    return <div>Failed to load shipping methods.</div>;
  }

  return (
    <CheckoutForm
      user={userResponse.data}
      shippingMethods={shippingMethods as ShippingMethod[]}
    />
  );
}

export default Checkout;
