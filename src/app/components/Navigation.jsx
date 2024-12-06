"use client";

import Logo from "./Logo.jsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation({ navItems = [], children }) {
  const currentPath = usePathname();

  return (
    <nav className="sticky flex justify-between items-center h-[70px] px-12 bg-white shadow-md">
      <Logo>
        <Link href="/">
          <span>Foo</span>
          <span className="text-orange-300">Fest</span>
        </Link>
      </Logo>
      <ul className="flex gap-12 text-xl ml-8">
        {navItems.map((item) => (
          <li
            key={item.href}
            className={`transition-text duration-150 ease-in ${
              currentPath === item.href
                ? "text-orange-300 border-b-2 border-orange-300"
                : "hover:text-orange-300 hover:border-b-2 border-b-orange-300"
            }`}
          >
            <Link
              href={item.href}
              className={currentPath === item.href ? "pointer-events-none" : ""}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </nav>
  );
}
