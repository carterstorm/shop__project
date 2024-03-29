import { InputElement } from "@/ui/atoms/InputElement";
import { TextArea } from "@/ui/atoms/TextArea";
import { FormField } from "@/ui/molecules/FormField";
import { ReviewAddButton } from "@/ui/atoms/ReviewAddButton";
import { type ReviewUserFormProps } from "@/types";
import { ReviewRatingOptions } from "@/ui/atoms/ReviewRatingOptions";

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
			<FormField id="content" labelTitle="Review message">
				<TextArea required={true} name="content" id="content" />
			</FormField>
			<ReviewRatingOptions />
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
			<ReviewAddButton setOptimisticReviews={setOptimisticReviews} productId={productId} />
		</form>
	);
};
