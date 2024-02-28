import { type ProductsListItemFragment } from "@/gql/graphql";
import { SingleProductInfo } from "@/ui/atoms/SingleProductInfo";
import { SingleProductLongDescription } from "@/ui/atoms/SingleProductLongDescription";

type ProductInformationProps = {
	product: ProductsListItemFragment;
};

export const ProductInformation = ({ product }: ProductInformationProps) => {
	return (
		<article className="flex flex-col gap-6 text-gray-600">
			<SingleProductInfo product={product} />
			<SingleProductLongDescription product={product} />
		</article>
	);
};
