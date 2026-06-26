import useAddToCart from "./useAddToCart";

function useHandleAddToCart() {
  const { mutate, isPending } = useAddToCart();

  const addProduct = (productVariantId: number, quantity = 1) => {
    mutate({ productVariantId, quantity });
  };

  return { addProduct, isPending };
}

export default useHandleAddToCart;
