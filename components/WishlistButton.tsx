import Link from "next/link";
import Icon from "./shared/Icon";
import endpoints from "@/lib/endpoints";

function WishlistButton() {
  return (
    <Link href={endpoints.wishlist} className="group action-button">
      <Icon
        name="Heart"
        className="group-hover:text-primary-dark group-focus-visible:text-primary-dark"
      />
    </Link>
  );
}

export default WishlistButton;
