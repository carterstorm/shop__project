"use client";

import Link from "next/link";
import clsx from "clsx";
import { type Route } from "next";
import { usePathname } from "next/navigation";

export const ActiveLink = <T extends string>({
	href,
	children,
}: {
	href: Route<T> | URL;
	children: React.ReactNode;
}) => {
	const pathName = usePathname();
	const isActive = pathName === href;
	const activeClassName = isActive && "text-blue-500";

	return (
		<li>
			<Link aria-current={isActive} href={href} className={clsx("text-sm", activeClassName)}>
				{children}
			</Link>
		</li>
	);
};
