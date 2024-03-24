import Image from "next/image";
import { ImageResponse } from "next/og";
import { getProductById } from "@/api/product";
import { formatMoney } from "@/utils/formatMoney";

export const runtime = "edge";
export const contentType = "image/png";

export const size = {
	width: 1000,
	height: 800,
};

export default async function OpenGraphImage({ params }: { params: { id: string } }) {
	const product = await getProductById(params.id);

	if (!product) return new ImageResponse(<div>Product not found.</div>);

	return new ImageResponse(
		(
			<div tw="relative w-full overflow-hidden rounded-lg flex">
				<div tw="flex items-center justify-center">
					<Image
						priority
						tw="h-full w-full object-cover object-center"
						width={500}
						height={500}
						src={product.images[0]?.url}
						alt={product.name}
					/>
				</div>
				<div tw="flex flex-col text-zinc-50 px-4 gap-4">
					<h1 tw="text-zinc-50 text-2xl">{product?.name}</h1>
					<span>{product.categories[0]?.name}</span>
					<p>{product.description}</p>
					<span>{formatMoney(product.price / 100)}</span>
				</div>
			</div>
		),
	);
}
