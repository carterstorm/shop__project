import { type Route } from "next";
import NextImage from "next/image";
import Link from "next/link";

type CardItemProps = {
	href: Route;
	slug: string;
	name: string;
	style?: string;
};

export const CardItem = ({ href, slug, name, style }: CardItemProps) => {
	return (
		<Link href={href} className={`${style} md:col-span-1`}>
			<li className={`h-full max-h-[200px] min-h-[150px] rounded-xl md:min-h-[300px]`}>
				<figure className="relative h-full w-full transition-transform duration-200 ease-in-out hover:scale-95 ">
					<NextImage
						src={`/${slug}.jpg`}
						alt={slug}
						width={300}
						height={300}
						className="h-full w-full rounded-xl object-cover object-center brightness-75"
					/>
					<h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-bold text-slate-200 xl:text-4xl">
						{name}
					</h2>
				</figure>
			</li>
		</Link>
	);
};
