"use client";

import { useFormStatus } from "react-dom";

export const AddProductToCartButton = () => {
	const { pending } = useFormStatus();

	return (
		<button
			disabled={pending}
			type="submit"
			className="flex h-14 w-32 items-center justify-center rounded-xl bg-blue-500 px-6 py-4 text-sm text-white transition-all hover:bg-blue-400  disabled:bg-blue-600"
		>
			{pending ? (
				<svg className="circle" viewBox="25 25 50 50">
					<circle className="circleLoader" r="20" cy="50" cx="50"></circle>
				</svg>
			) : (
				"Add to cart"
			)}
		</button>
	);
};
