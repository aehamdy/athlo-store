import navLinks from "@/lib/navLinks";
import NavLink from "./NavLink";
import { useTranslations } from "next-intl";

function Nav() {
  const t = useTranslations("navLinks");

  return (
    <nav>
      <ul className="flex flex-col lg:flex-row items-center gap-md">
        {navLinks.map((item) => (
          <li
            key={item.id}
            className={`${item.key === "home" && "hidden lg:block"} w-full lg:w-fit`}
          >
            <NavLink href={item.href} name={t(item.key)} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
