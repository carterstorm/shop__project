import { InputElement } from "@/ui/atoms/InputElement";
import { TextArea } from "@/ui/atoms/TextArea";
import { FormField } from "@/ui/molecules/FormField";
import { handleAddReviewAction } from "@/app/product/[productId]/actions";
import { type ReviewItemFragment } from "@/gql/graphql";

type ReviewWithOptionalId = Partial<Pick<ReviewItemFragment, "id">> &
	Omit<ReviewItemFragment, "id">;

type ReviewUserFormProps = {
	productId: string;
	setOptimisticReviews: (
		action:
			| ReviewWithOptionalId[]
			| ((pendingState: ReviewWithOptionalId[]) => ReviewWithOptionalId[]),
	) => void;
};

export const ReviewUserForm = ({ setOptimisticReviews, productId }: ReviewUserFormProps) => {
	return (
		<form className="h-auto w-full py-3 pe-4" data-testid="add-review-form">
			<FormField id="review-title" labelTitle="Review title">
				<InputElement
					name="headline"
					placeholder="Enter review title"
					id="review-title"
					required={true}
				/>
			</FormField>
			<FormField id="review-title" labelTitle="Review message">
				<TextArea required={true} name="content" />
			</FormField>
			<div>
				<input type="radio" id="rating" name="rating" value={1} />
				<label htmlFor="rating">1</label>
			</div>
			<div>
				<input type="radio" id="rating" name="rating" value={2} />
				<label htmlFor="rating">2</label>
			</div>

			<FormField id="user-name" labelTitle="User name">
				<InputElement name="name" placeholder="Enter your name" id="user-name" required={true} />
			</FormField>
			<FormField id="user-email" labelTitle="User email">
				<InputElement
					name="email"
					placeholder="Enter your email"
					id="user-email"
					required={true}
					type="email"
				/>
			</FormField>
			<div className="mt-4 flex justify-end">
				<button
					className="flex h-14 w-32 items-center justify-center rounded-xl bg-blue-500 px-6 py-4 text-sm text-white transition-all hover:bg-blue-400  disabled:bg-blue-600"
					formAction={async (formData: FormData) => {
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
		</form>
	);
};
