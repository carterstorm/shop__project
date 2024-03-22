import { useSearchParams } from "next/navigation";

export const SetCurrentSort = () => {
	const searchParams = useSearchParams();
	const order = searchParams.get("order");
	const orderBy = searchParams.get("orderBy");

	switch (orderBy) {
		case "price":
			if (order === "asc") {
				return "price+";
			} else {
				return "price-";
			}
		case "rating":
			if (order === "asc") {
				return "rating+";
			} else {
				return "rating-";
			}
		case "name":
			if (order === "asc") {
				return "name-";
			} else {
				return "name+";
			}
		default:
			return "Sort products";
	}
};
