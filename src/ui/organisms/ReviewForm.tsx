import { FormButton } from "@/ui/atoms/FormButton";
import { InputElement } from "@/ui/atoms/InputElement";
import { TextArea } from "@/ui/atoms/TextArea";
import { FormField } from "@/ui/molecules/FormField";

export const ReviewForm = () => {
	return (
		<section>
			<form className="h-auto w-full py-3 pe-4">
				<FormField id="review-title" labelTitle="Review title">
					<InputElement
						name="headline"
						placeholder="Enter review title"
						id="review-title"
						required={true}
					/>
				</FormField>
				<FormField id="review-title" labelTitle="Review message">
					<TextArea required={true} />
				</FormField>
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
					<FormButton buttonText="Add review" />
				</div>
			</form>
		</section>
	);
};
