import { type ReviewWithOptionalId } from "@/types";

export const ReviewItemList = ({ review }: { review: ReviewWithOptionalId }) => {
	const reviewDate = new Date(review.createdAt as string).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "2-digit",
	});

	return (
		<li key={review.id} className="mx-2 w-full border-b p-6">
			<div className="flex justify-between">
				<div>
					<h2 className="font-semibold text-blue-400">{review.author}</h2>
					<span className="text-sm">{review.email}</span>
				</div>
				<div className="flex flex-col">
					<span className="text-sm">Date: {reviewDate}</span>
					<span className="text-sm">Rate: {review.rating} / 5</span>
				</div>
			</div>
			<h3>{review.title}</h3>
			<p className="py-4 text-sm leading-6">{review.description}</p>
		</li>
	);
};
