import { useRouter } from "next/router";
import Link from "next/link";

const NavLink = ({ href, children }) => {
  const router = useRouter();
  const isActive = href === router.route;
  return (
    <Link href={href}>
      <a className={isActive ? "active" : null}>{children}</a>
    </Link>
  );
};

const Menu = () => {
  return (
    <nav>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/resume">Resume</NavLink>
      <NavLink href="/utils">Utils</NavLink>
    </nav>
  );
};

export default Menu;
