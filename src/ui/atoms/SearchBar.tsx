"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
import { type Route } from "next";

export const SearchBar = () => {
	const router = useRouter();
	const [search, setSearch] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value.trim().length > 1) {
			setSearch(event.target.value.trim());
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
		if (search.trim()) {
			router.push(`/search?query=${search}` as Route);
		}
	}, [search, router]);

	return (
		<form className="flex items-center justify-center" onSubmit={handleSubmit}>
			<Link href={`/search?query=${search}}` as Route}>
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
