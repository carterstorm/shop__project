import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PaginationProps = {
	activePageNumber: number;
	siblings?: number;
	numberOfAllPages: number;
	path: string;
	searchParams?: { [key: string]: string | undefined };
};

export const Pagination = ({
	activePageNumber,
	siblings = 2,
	numberOfAllPages,
	path,
	searchParams,
}: PaginationProps) => {
	const firstPage = 1;
	const siblingsArray = [...Array(siblings).keys()];
	const previousPages = siblingsArray
		.map((sibling) => activePageNumber - sibling - 1)
		.filter((page) => page >= 1)
		.reverse();
	const nextPages = siblingsArray
		.map((sibling) => activePageNumber + sibling + 1)
		.filter((page) => page <= numberOfAllPages);

	let paramsElements = Object.keys(searchParams ?? {})
		.map((key) => `${key}=${searchParams?.[key]}`)
		.join("&");

	paramsElements = "?" + paramsElements;

	return (
		<nav className="flex justify-center">
			<ul className="flex items-center gap-6" aria-label="pagination">
				{activePageNumber >= 4 && (
					<ActiveLink
						href={
							`/${path}/${firstPage}${paramsElements.length > 1 ? paramsElements : ""}` as Route
						}
						activePageNumber={activePageNumber}
					>
						<ChevronsLeft strokeWidth={1} size={30} />
					</ActiveLink>
				)}
				{activePageNumber !== firstPage && (
					<ActiveLink
						href={
							`/${path}/${activePageNumber - 1}${paramsElements.length > 1 ? paramsElements : ""}` as Route
						}
						activePageNumber={activePageNumber}
					>
						<ChevronLeft strokeWidth={1} size={30} />
					</ActiveLink>
				)}
				{[...previousPages, activePageNumber, ...nextPages].map((page, index) => {
					return (
						<ActiveLink
							activePageNumber={activePageNumber}
							key={index}
							href={`/${path}/${page}${paramsElements.length > 1 ? paramsElements : ""}` as Route}
							className="font-medium"
							activeClassName="text-slate-100 bg-blue-500 rounded-md px-3 py-1"
						>
							{page}
						</ActiveLink>
					);
				})}
				{activePageNumber !== numberOfAllPages && (
					<ActiveLink
						href={
							`/${path}/${activePageNumber + 1}${paramsElements.length > 1 ? paramsElements : ""}` as Route
						}
						activePageNumber={activePageNumber}
					>
						<ChevronRight strokeWidth={1} size={30} />
					</ActiveLink>
				)}
				{activePageNumber <= numberOfAllPages - 3 && (
					<ActiveLink
						href={
							`/${path}/${numberOfAllPages}${paramsElements.length > 1 ? paramsElements : ""}` as Route
						}
						activePageNumber={activePageNumber}
					>
						<ChevronsRight strokeWidth={1} size={30} />
					</ActiveLink>
				)}
			</ul>
		</nav>
	);
};
