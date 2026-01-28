import Link from "next/link";
import Icon from "./shared/Icon";
import endpoints from "@/lib/endpoints";

function ProfileButton() {
  return (
    <Link href={endpoints.auth.signIn} className="group p-xs action-button">
      <Icon
        name="User"
        className="group-hover:text-primary-dark group-focus-visible:text-primary-dark"
      />
    </Link>
  );
}

export default ProfileButton;
