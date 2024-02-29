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
	{
		id: "4",
		path: "/categories/accessories",
		label: "Accessories",
		exact: false,
	},
	{
		id: "5",
		path: "/categories/hoodies",
		label: "Hoodies",
		exact: false,
	},
	{
		id: "6",
		path: "/categories/t-shirts",
		label: "T-shirts",
		exact: false,
	},
];
