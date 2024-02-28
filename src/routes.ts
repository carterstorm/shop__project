import { type AppRoutes } from "@/types";

export const appRoutes: AppRoutes[] = [
	{
		id: "1",
		path: "/",
		label: "Home",
		exact: true,
	},
	{
		id: "2",
		path: "/products",
		label: "All",
		exact: false,
	},
	{
		id: "3",
		path: "/categories",
		label: "Categories",
		exact: false,
	},
];
