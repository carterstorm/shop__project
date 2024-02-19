import { SinglePageProductImage } from "@/ui/atoms/SinglePageProductImage";
import { ProductInformation } from "@/ui/molecules/ProductInformation";
import { getProductById } from "@/utils";

type SingleProductPageProps = {
	params: {
		productId: string;
	};
};

export default async function SingleProductPage({ params }: SingleProductPageProps) {
	const product = await getProductById(params.productId);

	return (
		<section className="grid grid-cols-2 gap-8">
			<SinglePageProductImage product={product} />
			<ProductInformation product={product} />
		</section>
	);
}
