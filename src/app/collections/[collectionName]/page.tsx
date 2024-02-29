import { notFound } from "next/navigation";
import { getCollection } from "@/api/collection";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CollectionPage({ params }: { params: { collectionName: string } }) {
	const collection = await getCollection(params.collectionName);

	if (!collection) {
		return notFound();
	}

	return (
		<section className="mx-auto lg:max-w-7xl lg:px-0">
			<div className="flex flex-col items-center gap-4">
				<h2 className="text-5xl font-bold">{collection.name}</h2>
				<p className="text-lg">{collection.description}</p>
			</div>
			<ProductList products={collection.products} />
		</section>
	);
}
