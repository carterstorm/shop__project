"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
	href: string;
	children: React.ReactNode;
	className?: string;
	activeClassName?: string;
};

export const ActiveLink = ({
	href,
	children,
	className = "block py-2 text-sm transition hover:text-blue-400",
	activeClassName = "border-b border-blue-400 text-blue-400",
}: ActiveLinkProps) => {
	const pathName = usePathname();
	const isActive = pathName === href;

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
