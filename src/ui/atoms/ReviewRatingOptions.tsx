import { useState } from "react";
import { Star } from "lucide-react";

const reviewOptions = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }];

export const ReviewRatingOptions = () => {
	const [rating, setRating] = useState(1);
	const [hoverRating, setHoverRating] = useState(0);

	const handleMouseEnter = (newRating: number) => {
		setHoverRating(newRating);
	};

	const handleMouseLeave = () => {
		setHoverRating(0);
	};

	const handleClick = (newRating: number) => {
		setRating(newRating);
	};

	return (
		<div className="my-2 flex items-center gap-1 text-sm">
			<span className="text-slate-600">Select rating:</span>
			{reviewOptions.map((option) => (
				<div key={option.value}>
					<input
						type="radio"
						id={`rating-${option.value}`}
						name="rating"
						value={option.value}
						className="hidden"
					/>
					<label
						htmlFor={`rating-${option.value}`}
						onMouseEnter={() => handleMouseEnter(option.value)}
						onMouseLeave={handleMouseLeave}
						onClick={() => handleClick(option.value)}
					>
						<Star
							size={24}
							fill={hoverRating >= option.value || rating >= option.value ? "#FBBF24" : "#E2E8F0"}
							strokeWidth={1.5}
							stroke={hoverRating >= option.value || rating >= option.value ? "#FBBF24" : "#DADEE3"}
							className="cursor-pointer transition hover:stroke-slate-600"
						/>
					</label>
				</div>
			))}
		</div>
	);
};
