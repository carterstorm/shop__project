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
};

export const ActiveLink = <T extends string>({
	href,
	children,
	className = "block py-2 text-sm transition hover:text-blue-400",
	activeClassName = "border-b border-blue-400 text-blue-400",
}: ActiveLinkProps<T>) => {
	const pathName = usePathname();

	const isActive =
		href === "/products"
			? pathName === "/products" || pathName.startsWith("/product")
			: pathName === href;

	return (
		<Link
			aria-current={isActive}
			href={{ pathname: href }}
			className={clsx(className, { [activeClassName]: isActive })}
		>
			{children}
		</Link>
	);
};
