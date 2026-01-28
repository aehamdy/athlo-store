import HeaderActions from "../HeaderActions";
import Logo from "../shared/Logo";
import Nav from "../shared/Nav";

function Header() {
  return (
    <header className="flex justify-between items-center py-sm px-md bg-background/60">
      <Logo />

      <div className="hidden lg:block">
        <Nav />
      </div>

      <HeaderActions />
    </header>
  );
}

export default Header;
