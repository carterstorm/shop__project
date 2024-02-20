import { ChevronLeft, ChevronRight } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PaginationProps = {
	pageNumber: number;
	siblings?: number;
};

export const Pagination = ({ pageNumber, siblings = 1 }: PaginationProps) => {
	const siblingsArray = [...Array(siblings).keys()];
	const previousPages = siblingsArray
		.map((sibling) => pageNumber - sibling - 1)
		.filter((page) => page >= 1)
		.reverse();
	const nextPages = siblingsArray.map((sibling) => pageNumber + sibling + 1);

	return (
		<div className="flex items-center justify-center gap-8" aria-label="pagination">
			{pageNumber !== 1 && (
				<ActiveLink href={`/products/${pageNumber - 1}`}>
					<ChevronLeft strokeWidth={1} size={30} />
				</ActiveLink>
			)}
			{[...previousPages, pageNumber, ...nextPages].map((page, index) => (
				<ActiveLink
					key={index}
					href={`/products/${page}`}
					className="font-medium"
					activeClassName="text-slate-100 bg-blue-500 rounded-md px-3 py-1"
				>
					{page}
				</ActiveLink>
			))}
			<ActiveLink href={`/products/${pageNumber + 1}`}>
				<ChevronRight strokeWidth={1} size={30} />
			</ActiveLink>
		</div>
	);
};
