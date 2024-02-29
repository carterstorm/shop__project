import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Logo } from "@/ui/atoms/Logo";
import { Navigation } from "@/ui/molecules/Navigation";

export const Header = () => {
	return (
		<header className="border-b border-slate-200 bg-slate-50 px-8 py-6">
			<div className="mx-auto flex items-center justify-between lg:max-w-7xl">
				<div className="flex">
					<Link href="/">
						<Logo />
					</Link>
					<Navigation />
				</div>
				<ShoppingCart />
			</div>
		</header>
	);
};
