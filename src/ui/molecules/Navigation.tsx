import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { appRoutes } from "@/routes";

export const Navigation = () => {
	return (
		<nav className="flex items-center">
			<ul className="flex gap-6">
				{appRoutes.map((route) => {
					return (
						<li key={route.id}>
							<ActiveLink
								href={route.path as Route}
								exact={route.exact}
								activeClassName={"border-b border-blue-400 text-blue-400"}
								className={"block py-2 text-sm transition hover:text-blue-400"}
							>
								{route.label}
							</ActiveLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
