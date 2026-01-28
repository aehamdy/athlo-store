import navLinks from "@/lib/navLinks";
import NavLink from "../NavLink";

function Nav() {
  return (
    <nav className="">
      <ul className="flex flex-col lg:flex-row items-center gap-md">
        {navLinks.map((item) => (
          <li key={item.name} className="w-full lg:w-fit">
            <NavLink href={item.href} name={item.name} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
