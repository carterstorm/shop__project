import { type ReviewWithOptionalId } from "@/types";
import { ReviewItemList } from "@/ui/atoms/ReviewItemList";

type ReviewListProps = {
	reviews: ReviewWithOptionalId[];
};

export const ReviewList = ({ reviews }: ReviewListProps) => {
	const sortReviewsByDescDate = reviews.sort((data1, data2) => {
		return (
			new Date(data2.createdAt as string).getTime() - new Date(data1.createdAt as string).getTime()
		);
	});

	return (
		<ul className="h-dvh w-full ">
			{sortReviewsByDescDate.map((review, index) => {
				return <ReviewItemList key={review.id || index} review={review} />;
			})}
		</ul>
	);
};
