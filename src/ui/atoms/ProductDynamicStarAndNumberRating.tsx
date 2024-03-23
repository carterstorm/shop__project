import { Star } from "lucide-react";
import clsx from "clsx";
import { type ProductsListItemFragment } from "@/gql/graphql";

export const ProductDynamicStarAndNumberRating = ({
	product,
	starSize,
	ratingProductTextSize,
}: {
	product: ProductsListItemFragment;
	starSize?: number;
	ratingProductTextSize?: string;
}) => {
	const fullStars = Math.floor(product.rating ?? 0);
	const partialStar = ((product.rating ?? 0) % 1) * 100;
	const numberOfStars = 5;

	return (
		<div className="flex items-center gap-2">
			<div className="flex">
				{Array.from({ length: numberOfStars }).map((_, index) => {
					if (index < fullStars) {
						return <Star key={index} fill="#FBBF24" stroke="#FBBF24" size={starSize} />;
					} else if (index === fullStars && partialStar > 0) {
						return (
							<div key={index} className="relative">
								<Star fill="#E2E8F0" stroke="#DADEE3" size={starSize} />
								<div
									className="absolute left-0 top-0 overflow-hidden"
									style={{
										width: `${partialStar}%`,
									}}
								>
									<Star fill="#FBBF24" stroke="#FBBF24" size={starSize} />
								</div>
							</div>
						);
					} else {
						return <Star key={index} fill="#E2E8F0" stroke="#DADEE3" size={starSize} />;
					}
				})}
			</div>
			<div className={clsx("text-sm text-slate-500", ratingProductTextSize)}>
				<span data-testid="product-rating">{product.rating?.toFixed(2)}</span>/{numberOfStars}
			</div>
		</div>
	);
};
