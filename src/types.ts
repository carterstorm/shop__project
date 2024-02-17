export type ProductItemType = {
	id: string;
	name: string;
	category: string;
	price: number;
	coveredImage: {
		alt: string;
		src: string;
	};
};

export type AppRoutes = {
	id: string;
	path: string;
	label: string;
};
