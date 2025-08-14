import Link from "next/link";
import Image from "next/image";
import { useUserContext } from "../context/UserProvider";

interface NavBarItemProps {
  item: {
    name: string;
    href: string;
    icon: string;
    iconActive: string;
  };
  pathname: string;
}

const NavBarItem = ({ item, pathname }: NavBarItemProps) => {
  const { user } = useUserContext();

  return (
    <li className="flex flex-col items-center" key={item.name}>
      <Link href={item.href}>
        <Image
          className="md:hidden"
          src={pathname === item.href ? item.iconActive : item.icon}
          alt="Home"
          width={25}
          height={25}
        />
        <p
          className={`
            hidden md:block
            ${pathname === item.href ? "border-b-4 border-primary" : ""}
            `}
        >
          {item.name}
        </p>
      </Link>
    </li>
  );
};

export default NavBarItem;
