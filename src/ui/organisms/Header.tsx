import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Logo } from "@/ui/atoms/Logo";
import { Navigation } from "@/ui/molecules/Navigation";
import { SearchBar } from "@/ui/atoms/SearchBar";

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
				<div className="flex items-center gap-6">
					<SearchBar />
					<ShoppingCart />
				</div>
			</div>
		</header>
	);
};
