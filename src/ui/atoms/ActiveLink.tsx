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
	activePageNumber?: number;
	exact?: boolean;
	disabled?: boolean;
};

export const ActiveLink = <T extends string>({
	href,
	exact,
	children,
	className,
	activeClassName,
	activePageNumber,
}: ActiveLinkProps<T>) => {
	const pathName = usePathname();
	const isActive = exact ? pathName === href : pathName.startsWith(href);

	return (
		<Link
			prefetch={activePageNumber ?? 1 < 5 ? true : false}
			aria-current={isActive ? true : undefined}
			href={href}
			className={clsx(className, isActive && activeClassName)}
		>
			{children}
		</Link>
	);
};
