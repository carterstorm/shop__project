import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navigation = () => {
	return (
		<nav className="flex items-center">
			<ul className="flex gap-8">
				<li>
					<ActiveLink href="/">Home</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/products" exact={false}>
						Products
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
