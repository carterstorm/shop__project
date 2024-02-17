import { appRoutes } from "@/routes";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navigation = () => {
	return (
		<nav className="flex items-center">
			<ul className="flex gap-8">
				{appRoutes.map((route) => {
					return (
						<li key={route.id}>
							<ActiveLink href={route.path}>{route.label}</ActiveLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
