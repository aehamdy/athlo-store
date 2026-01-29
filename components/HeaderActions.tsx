import CartButton from "./CartButton";
import MobileMenu from "./MobileMenu";
import ProfileButton from "./ProfileButton";
import SearchModal from "./SearchModal";
import PreferencesActions from "./shared/preferences/PreferencesActions";
import WishlistButton from "./WishlistButton";

function HeaderActions() {
  return (
    <div className="flex items-center gap-xs">
      <SearchModal />

      <div className="hidden lg:flex lg:items-center lg:gap-xs">
        <PreferencesActions />
      </div>

      <WishlistButton />
      <CartButton />

      <div className="hidden lg:flex">
        <ProfileButton />
      </div>

      <div className="block lg:hidden">
        <MobileMenu />
      </div>
    </div>
  );
}

export default HeaderActions;
