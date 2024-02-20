"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type Route } from "next";

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
};

export const ActiveLink = <T extends string>({
	href,
	exact = true,
	children,
	className = "block py-2 text-sm transition hover:text-blue-400",
	activeClassName = "border-b border-blue-400 text-blue-400",
}: ActiveLinkProps<T>) => {
	const pathName = usePathname();
	const isActive = exact ? pathName === href : pathName.startsWith(href);

	return (
		<Link
			aria-current={isActive}
			href={href}
			className={clsx(className, { [activeClassName]: isActive })}
		>
			{children}
		</Link>
	);
};
