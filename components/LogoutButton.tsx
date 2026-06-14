import Icon from "./shared/Icon";
import { Button } from "./ui/button";

function LogoutButton() {
  return (
    <Button variant="destructive" className="w-full text-white">
      <Icon name="LogOut" className="text-current" /> Logout
    </Button>
  );
}

export default LogoutButton;
