"use client";

import { useOptimistic } from "react";
import { ReviewUserForm } from "@/ui/molecules/ReviewUserForm";
import { ReviewList } from "@/ui/molecules/ReviewList";
import { type ReviewWithOptionalId } from "@/types";

type ReviewsProps = {
	productId: string;
	reviews: ReviewWithOptionalId[];
};

export const Reviews = ({ reviews, productId }: ReviewsProps) => {
	const [optimisticReviews, setOptimisticReviews] = useOptimistic(reviews);

	return (
		<section className="ltr grid grid-cols-reviews">
			<ReviewUserForm setOptimisticReviews={setOptimisticReviews} productId={productId} />
			<ReviewList reviews={optimisticReviews} />
		</section>
	);
};
