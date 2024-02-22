import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PaginationProps = {
	activePageNumber: number;
	siblings?: number;
	numberOfAllPages: number;
};

export const Pagination = ({
	activePageNumber,
	siblings = 2,
	numberOfAllPages,
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

	return (
		<nav className="flex justify-center">
			<ul className="flex items-center gap-6" aria-label="pagination">
				{activePageNumber >= 4 && (
					<ActiveLink href={`/products/${firstPage}`}>
						<ChevronsLeft strokeWidth={1} size={30} />
					</ActiveLink>
				)}
				{activePageNumber !== firstPage && (
					<ActiveLink href={`/products/${activePageNumber - 1}`}>
						<ChevronLeft strokeWidth={1} size={30} />
					</ActiveLink>
				)}
				{[...previousPages, activePageNumber, ...nextPages].map((page, index) => {
					return (
						<ActiveLink
							key={index}
							href={`/products/${page}`}
							className="font-medium"
							activeClassName="text-slate-100 bg-blue-500 rounded-md px-3 py-1"
						>
							{page}
						</ActiveLink>
					);
				})}
				{activePageNumber !== numberOfAllPages && (
					<ActiveLink href={`/products/${activePageNumber + 1}`}>
						<ChevronRight strokeWidth={1} size={30} />
					</ActiveLink>
				)}
				{activePageNumber <= numberOfAllPages - 3 && (
					<ActiveLink href={`/products/${numberOfAllPages}`}>
						<ChevronsRight strokeWidth={1} size={30} />
					</ActiveLink>
				)}
			</ul>
		</nav>
	);
};
