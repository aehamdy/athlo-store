import navLinks from "@/lib/navLinks";
import NavLink from "./NavLink";

function Nav() {
  return (
    <nav className="">
      <ul className="flex flex-col lg:flex-row items-center gap-md">
        {navLinks.map((item) => (
          <li
            key={item.id}
            className={`${item.key === "home" && "hidden lg:block"} w-full lg:w-fit`}
          >
            <NavLink href={item.href} name={item.key} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
