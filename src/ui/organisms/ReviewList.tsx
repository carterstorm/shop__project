import { type ReviewWithOptionalId } from "@/types";

type ReviewListProps = {
	reviews: ReviewWithOptionalId[];
};

export const ReviewList = ({ reviews }: ReviewListProps) => {
	const sortProducts = reviews.sort((data1, data2) => {
		return (
			new Date(data2.createdAt as string).getTime() - new Date(data1.createdAt as string).getTime()
		);
	});

	return (
		<ul className="h-dvh w-full ">
			{sortProducts?.map((review) => (
				<li key={review.id} className="mx-2 w-full border-b p-6">
					<div className="flex justify-between">
						<div>
							<h2 className="font-semibold text-blue-400">{review.author}</h2>
							<span className="text-sm">{review.email}</span>
						</div>
						<div className="flex flex-col">
							<span className="text-sm">
								Date:{" "}
								{new Date(review.createdAt as string).toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "2-digit",
								})}
							</span>
							<span className="text-sm">Rate: {review.rating} / 5</span>
						</div>
					</div>
					<h3>{review.title}</h3>
					<p className="py-4 text-sm leading-6">{review.description}</p>
				</li>
			))}
		</ul>
	);
};
