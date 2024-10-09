"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavItem = ({ href, icon: Icon, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-label={label}
      className={`py-2.5 self-stretch inline-flex justify-center items-center ${
        isActive ? "border-r-2 border-[#084CD8] text-[#084CD8]" : "text-[#E0E0E0]"
      }`}
    >
      <Icon size={28} />
    </Link>
  );
};


export default NavItem;