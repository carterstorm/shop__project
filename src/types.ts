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
