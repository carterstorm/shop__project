"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SearchIcon } from "lucide-react";
import { useDebounce } from "@/utils/useDebounce";
import { InputElement } from "@/ui/atoms/InputElement";

export const SearchBar = () => {
	const router = useRouter();
	const [search, setSearch] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);
	const debouncedSearch = useDebounce(search, 500);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const trimmedValue = event.target.value.trim();

		if (trimmedValue.length > 1) {
			setSearch(trimmedValue);
		} else {
			setSearch("");
			router.push("/products");
		}
	};

	useEffect(() => {
		if (debouncedSearch.trim().length > 1) {
			router.push(`/search?query=${debouncedSearch}`);
		}
	}, [debouncedSearch, router]);

	return (
		<div className="ltr relative flex items-center">
			<SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 transform" size={20} />
			<InputElement
				ref={inputRef}
				onChange={handleChange}
				name="search"
				type="search"
				placeholder="Type for search..."
				className="ps-8"
				required={false}
			/>
		</div>
	);
};
