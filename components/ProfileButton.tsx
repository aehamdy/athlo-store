import Link from "next/link";
import Icon from "./shared/Icon";
import ROUTES from "@/lib/routes";

function ProfileButton() {
  return (
    <Link href={ROUTES.auth.login} className="group p-xs action-button">
      <Icon
        name="User"
        className="group-hover:text-primary-dark group-focus-visible:text-primary-dark"
      />
    </Link>
  );
}

export default ProfileButton;
