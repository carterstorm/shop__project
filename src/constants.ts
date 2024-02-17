import { env } from "process";
import { type ProductItemType } from "@/types";

export const apiURL = env.API_URL;

export const products: ProductItemType[] = [
	{
		id: "1",
		name: "Mug",
		category: "Accessories",
		price: 1999,
		coveredImage: { alt: "Mug", src: "/mug.jpg" },
	},
	{
		id: "2",
		name: "T-shirt",
		category: "Clothes",
		price: 399,
		coveredImage: { alt: "T-shirt", src: "/t-shirt.jpg" },
	},
	{
		id: "3",
		name: "Belt",
		category: "Accessories",
		price: 4599,
		coveredImage: { alt: "Belt", src: "/belt.jpg" },
	},
	{
		id: "4",
		name: "Backpack",
		category: "Accessories",
		price: 4599,
		coveredImage: { alt: "Backpack", src: "/backpack.jpg" },
	},
];
