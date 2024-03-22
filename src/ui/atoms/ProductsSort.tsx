"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { SetCurrentSort } from "@/utils/sortProducts";
import { useSortHandler } from "@/utils/useSortHandler";

const sortOptions = [
	{ id: 1, value: "", label: "Sort products" },
	{ id: 2, value: "price+", label: "By price - Low to High", dataTestId: "sort-by-price" },
	{ id: 3, value: "price-", label: "By price - High to Low", dataTestId: "sort-by-price" },
	{ id: 4, value: "rating+", label: "By rating - Low to High", dataTestId: "sort-by-rating" },
	{ id: 5, value: "rating-", label: "By rating - High to Low", dataTestId: "sort-by-rating" },
	{ id: 6, value: "name+", label: "By name - A to Z" },
	{ id: 7, value: "name-", label: "By name - Z to A" },
];

export const ProductsSort = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const [selectedSortValue, setSelectedSortValue] = useSortHandler(
		SetCurrentSort(),
		searchParams,
		pathname,
	);

	return (
		<select onChange={setSelectedSortValue} value={selectedSortValue} className="justify-self-end">
			{sortOptions.map((option, index) => (
				<option
					key={option.id}
					value={option.value}
					data-testid={index === 0 ? "" : option.dataTestId}
				>
					{option.label}
				</option>
			))}
		</select>
	);
};
