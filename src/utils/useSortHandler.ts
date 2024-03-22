import { type Route } from "next";
import { type ReadonlyURLSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

type UseChangeHandlerReturn = [string, React.ChangeEventHandler<HTMLSelectElement>];

export const useSortHandler = (
	initialValue: string,
	searchParams: ReadonlyURLSearchParams,
	pathname: string,
): UseChangeHandlerReturn => {
	const [value, setValue] = useState(initialValue);
	const router = useRouter();

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const params = new URLSearchParams(searchParams.toString());
		setValue(event.target.value);

		switch (event.target.value) {
			case "":
				params.delete("orderBy");
				params.delete("order");
				break;
			case "price+":
				params.set("orderBy", "price");
				params.set("order", "asc");
				break;
			case "price-":
				params.set("orderBy", "price");
				params.set("order", "desc");
				break;
			case "rating+":
				params.set("orderBy", "rating");
				params.set("order", "asc");
				break;
			case "rating-":
				params.set("orderBy", "rating");
				params.set("order", "desc");
				break;
			case "name+":
				params.set("orderBy", "name");
				params.set("order", "asc");
				break;
			case "name-":
				params.set("orderBy", "name");
				params.set("order", "desc");
				break;
			default:
				params.set("sort", event.target.value);
		}

		const url = `${pathname}?${params.toString()}` as Route;
		router.push(url);
	};
	return [value, handleChange];
};
