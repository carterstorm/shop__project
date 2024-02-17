import Link from "next/link";
import { Logo } from "@/ui/atoms/Logo";
import { Navigation } from "@/ui/molecules/Navigation";

export const Header = () => {
	return (
		<header className="border-b border-slate-200 bg-slate-50 px-8 py-6">
			<div className="mx-auto flex justify-between lg:max-w-7xl">
				<div className="flex">
					<Link href="/" className="mr-6">
						<Logo />
					</Link>
					<Navigation />
				</div>
			</div>
		</header>
	);
};
