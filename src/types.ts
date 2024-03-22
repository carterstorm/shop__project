import { type ReviewItemFragment } from "@/gql/graphql";

export type ReviewWithOptionalId = Partial<Pick<ReviewItemFragment, "id">> &
	Omit<ReviewItemFragment, "id">;

export type ReviewUserFormProps = {
	productId: string;
	setOptimisticReviews: (
		action:
			| ReviewWithOptionalId[]
			| ((pendingState: ReviewWithOptionalId[]) => ReviewWithOptionalId[]),
	) => void;
};

export type AppRoutes = {
	id: string;
	path: string;
	label: string;
	exact: boolean;
};
