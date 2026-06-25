import Link from "next/link";
import CartDrawer from "../../../features/cart/components/CartDrawer";
import MobileMenu from "../../MobileMenu";
import SearchModal from "../../SearchModal";
import PreferencesActions from "../../shared/preferences/PreferencesActions";
import Icon from "../../shared/Icon";
import ROUTES from "@/lib/routes";
import AccountActions from "@/components/AccountActions";

function HeaderActions() {
  return (
    <div className="flex items-center gap-xs">
      <Link
        href={ROUTES.public.home}
        className="group lg:hidden p-xs action-button"
      >
        <Icon
          name="Home"
          className="group-hover:text-primary-dark group-focus-visible:text-primary-dark"
        />
      </Link>

      <SearchModal />

      <div className="hidden lg:flex lg:items-center lg:gap-xs">
        <PreferencesActions />
      </div>

      <CartDrawer />

      <div className="hidden lg:flex">
        <AccountActions />
      </div>

      <div className="block lg:hidden">
        <MobileMenu />
      </div>
    </div>
  );
}

export default HeaderActions;
