import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const NavigationList = () => {
	return (
		<ul className="flex flex-row gap-8">
			<ActiveLink href="/">Home</ActiveLink>
			<ActiveLink href="/products">Products</ActiveLink>
		</ul>
	);
};
