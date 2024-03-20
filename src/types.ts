import { type ReviewItemFragment } from "@/gql/graphql";

export type ReviewWithOptionalId = Partial<Pick<ReviewItemFragment, "id">> &
	Omit<ReviewItemFragment, "id">;

export type AppRoutes = {
	id: string;
	path: string;
	label: string;
	exact: boolean;
};
