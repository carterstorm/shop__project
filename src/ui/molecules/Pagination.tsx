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
			{pageNumber !== 1 && <ActiveLink href={`/products/${pageNumber - 1}`}>Previous</ActiveLink>}
			{[...previousPages, pageNumber, ...nextPages].map((page) => (
				<ActiveLink href={`/products/${page}`} key={page}>
					{page}
				</ActiveLink>
			))}
			<ActiveLink href={`/products/${pageNumber + 1}`}>Next</ActiveLink>
		</div>
	);
};
