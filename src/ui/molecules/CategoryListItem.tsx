import { type Route } from "next";
import NextImage from "next/image";
import Link from "next/link";
import { type CategoryListItemFragment } from "@/gql/graphql";

type CategoryListItemProps = {
	category: CategoryListItemFragment;
};

export const CategoryListItem = ({ category }: CategoryListItemProps) => {
	return (
		<Link
			href={`/categories/${category.slug}/1` as Route}
			className={`${category.slug === "t-shirts" ? "sm:col-span-2  md:col-span-1 " : ""}`}
		>
			<li className={`h-full max-h-[200px] min-h-[150px] rounded-xl md:min-h-[300px]`}>
				<figure className="relative h-full w-full transition-transform duration-200 ease-in-out hover:scale-95 ">
					<NextImage
						src={`/${category.slug}.jpg`}
						alt={category.slug}
						width={300}
						height={300}
						className="h-full w-full rounded-xl object-cover object-center brightness-75"
					/>
					<h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-slate-200 xl:text-4xl">
						{category.name}
					</h2>
				</figure>
			</li>
		</Link>
	);
};
