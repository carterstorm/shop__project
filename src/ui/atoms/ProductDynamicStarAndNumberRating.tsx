import { Star } from "lucide-react";
import clsx from "clsx";
import { maxRatingOptions } from "@/constants";

export const ProductDynamicStarAndNumberRating = ({
	rating,
	starSize,
	ratingProductTextSize,
	fixedRating,
}: {
	rating: number | null | undefined;
	starSize?: number;
	ratingProductTextSize?: string;
	fixedRating?: boolean;
}) => {
	const fullStars = Math.floor(rating ?? 0);
	const partialStar = ((rating ?? 0) % 1) * 100;

	return (
		<div className="flex items-center gap-2">
			<div className="flex">
				{Array.from({ length: maxRatingOptions }).map((_, index) => {
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
				<span data-testid="product-rating">{rating?.toFixed(fixedRating ? 2 : 0)}</span>/
				{maxRatingOptions}
			</div>
		</div>
	);
};
