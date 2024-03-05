"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
import { type Route } from "next";

export const SearchBar = () => {
	const router = useRouter();
	const [search, setSearch] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value.trim().length > 1) {
			setSearch(event.target.value.trim());
		} else {
			setSearch("");
			router.push("/products");
		}
	};

	useEffect(() => {
		if (search.trim()) {
			router.push(`/search?query=${search}`);
		}
	}, [search, router]);

	return (
		<form className="flex items-center justify-center">
			<Link href={`/search?query=${search.trim()}` as Route}>
				<SearchIcon size={20} />
			</Link>
			<input className="" type="search" placeholder="Type for search..." onChange={handleChange} />
		</form>
	);
};
