"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
import { type Route } from "next";
import { useDebounce } from "@/utils/useDebounce";

export const SearchBar = () => {
	const router = useRouter();
	const [search, setSearch] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const trimmedValue = event.target.value.trim();

		if (trimmedValue.length > 1) {
			setSearch(trimmedValue);
		} else {
			setSearch("");
			router.push("/products");
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const trimmedInputValue = inputRef.current?.value.trim();

		if ((trimmedInputValue?.length ?? 0) > 1) {
			setSearch(trimmedInputValue ?? "");
		} else if ((trimmedInputValue?.length ?? 0) <= 1) {
			setSearch("");
			router.push("/products");
		}
	};

	const debouncedSearch = useDebounce(search, 1500);

	useEffect(() => {
		if (debouncedSearch.trim()) {
			router.push(`/search?query=${debouncedSearch}` as Route);
		}
	}, [debouncedSearch, router]);

	return (
		<form className="flex items-center justify-center" onSubmit={handleSubmit}>
			<Link href={`${search.length <= 1 ? "/products" : `/search?query=${search}`}` as Route}>
				<SearchIcon size={20} />
			</Link>
			<input
				className=""
				type="search"
				placeholder="Type for search..."
				ref={inputRef}
				onChange={handleChange}
			/>
		</form>
	);
};
