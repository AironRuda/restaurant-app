"use client";
import { usePathname } from "next/navigation";
import NavBarItem from "./NavBarItem";

const navItems = [
  {
    name: "Perfil",
    href: "/profile",
    icon: "/user-icon.svg",
    iconActive: "/white-user-icon.svg",
  },
  {
    name: "Productos",
    href: "/products",
    icon: "/collection-icon.svg",
    iconActive: "/white-collection-icon.svg",
  },
  {
    name: "Pedidos",
    href: "/orders",
    icon: "/bag-icon.svg",
    iconActive: "/white-bag-icon.svg",
  },
];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="h-22 m-0 block items-center justify-between shadow-md bg-primary-bg">
      <ul className="flex items-center justify-around h-full">
        {navItems.map((item) => (
          <NavBarItem key={item.name} item={item} pathname={pathname} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
