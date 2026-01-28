import React from "react";


import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";

import { NavLinksProps } from "@/types/types";

export function NavLink({ href, children }: NavLinksProps) {

	const locale = useLocale();
  const pathname = usePathname();
	const fullPath = href === '/' ? `/${locale}` : `/${locale}${href}`;
	const isActive = pathname === fullPath;

  return (
    <div className="flex md:flex-col items-center space-x-2 space-y-2">
			{isActive && (
				<div className="block md:hidden w-1.5 h-1.5 rounded-full bg-tertiary"></div>
			)}
      <Link className={`text-xl text-text-primary font-semibold hover:text-text-primary/70 duration-300 transition-all ${isActive ? "text-text-tertiary" : "text-text-primary" }`} href={href}>{children}</Link>
			{isActive && (
				<div className="hidden md:block w-1.5 h-1.5 rounded-full bg-tertiary"></div>
			)}
    </div>
  );
}
