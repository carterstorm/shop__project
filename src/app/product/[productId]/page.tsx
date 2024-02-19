import { formatMoney, getProductById } from "@/utils";

type SingleProductPageProps = {
	params: {
		productId: string;
	};
};

export default async function SingleProductPage({ params }: SingleProductPageProps) {
	const product = await getProductById(params.productId);

	return (
		<section className="grid grid-cols-2 gap-8">
			<div className="flex justify-center">
				<img src={product.image} alt={product.title} className="w-full rounded-lg object-contain" />
			</div>
			<article className="flex flex-col gap-6 text-gray-600">
				<div className="flex flex-col gap-2">
					<span className="text-lg text-gray-400">{product.category}</span>
					<h1 className="text-3xl font-extrabold text-blue-400">{product.title}</h1>
					<div className="flex gap-4">
						<span>{product.rating.rate}/5</span>
						<span>({product.rating.count}) reviews</span>
					</div>
					<p className="italic">{product.description}</p>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-700">
						{formatMoney(product.price, "USD")}
					</span>
				</div>
				<p>{product.longDescription}</p>
			</article>
		</section>
	);
}