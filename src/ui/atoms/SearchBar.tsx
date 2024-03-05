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
	const debouncedSearch = useDebounce(search);

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

	useEffect(() => {
		if (debouncedSearch.trim()) {
			router.push(`/search?query=${debouncedSearch}` as Route);
		}
	}, [debouncedSearch, router]);

	return (
		<form className="ltr relative flex items-center" onSubmit={handleSubmit}>
			<Link
				className="absolute left-2 top-1/2 -translate-y-1/2 transform"
				href={`${search.length <= 1 ? "/products" : `/search?query=${search}`}` as Route}
			>
				<SearchIcon size={20} />
			</Link>
			<input
				className="focus:ring-primary-500 h-10 min-w-60 rounded-xl border ps-8 text-sm transition-all duration-300 ease-in-out focus:border-transparent focus:outline-none focus:ring-2"
				type="search"
				placeholder="Type for search..."
				ref={inputRef}
				onChange={handleChange}
			/>
		</form>
	);
};
