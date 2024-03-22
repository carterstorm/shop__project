import { handleAddReviewAction } from "@/app/product/[productId]/actions";
import { type ReviewUserFormProps } from "@/types";

export const ReviewAddButton = ({ setOptimisticReviews, productId }: ReviewUserFormProps) => {
	return (
		<div className="mt-4 flex justify-end">
			<button
				className="flex h-14 w-32 items-center justify-center rounded-xl bg-blue-500 px-6 py-4 text-sm text-white transition-all hover:bg-blue-400  disabled:bg-blue-600"
				formAction={async (formData) => {
					const reviewData = {
						title: String(formData.get("headline")),
						description: String(formData.get("content")),
						author: String(formData.get("name")),
						email: String(formData.get("email")),
						rating: Number(formData.get("rating")),
						createdAt: new Date().toISOString(),
						productId: productId,
					};

					setOptimisticReviews((prev) => [...prev, reviewData]);
					await handleAddReviewAction(reviewData);
				}}
			>
				Add review
			</button>
		</div>
	);
};
