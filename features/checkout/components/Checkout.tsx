"use client";

import useCurrentUser from "@/features/profile/hooks/useCurrentUser";
import useFetchShippingMethods from "../hooks/useFetchShippingMethods";

import CheckoutForm from "./CheckoutForm";
import { ShippingMethod } from "../types";
import ErrorMessage from "@/components/shared/ErrorMessage";
import CheckoutSkeleton from "./skeletons/CheckoutSkeleton";

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

  if (isUserPending || isShippingPending) return <CheckoutSkeleton />;

  if (isUserError || !userResponse)
    return <ErrorMessage message="Failed to load profile." />;

  if (isShippingError)
    return <ErrorMessage message="Failed to load shipping methods." />;

  return (
    <CheckoutForm
      user={userResponse.data}
      shippingMethods={shippingMethods as ShippingMethod[]}
    />
  );
}

export default Checkout;
