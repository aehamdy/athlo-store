import { useAuthStore } from "@/lib/stores/auth.store";
import useAddToCart from "./useAddToCart";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import ROUTES from "@/lib/routes";
import { useTranslations } from "next-intl";

function useHandleAddToCart() {
  const t = useTranslations("actions");
  const router = useRouter();

  const { mutate, isPending } = useAddToCart();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const addProduct = (productVariantId: number, quantity = 1) => {
    if (!isAuthenticated) {
      toast.warning(t("loginRequiredForCart"), {
        action: {
          label: t("login"),
          onClick: () => router.push(ROUTES.auth.login),
        },
      });
    } else {
      mutate({ productVariantId, quantity });
    }
  };

  return { addProduct, isPending };
}

export default useHandleAddToCart;
