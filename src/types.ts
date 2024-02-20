export type AppRoutes = {
	id: string;
	path: string;
	label: string;
	exact: boolean;
};

export type ProductItemResponse = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};
