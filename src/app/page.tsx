import { Suspense } from "react";
import { getCollections } from "@/api/collections";
import { CollectionList } from "@/ui/organisms/CollectionList";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

export default async function Home() {
	const collections = await getCollections(3);

	return (
		<section className="mx-auto lg:max-w-7xl lg:px-0">
			<CollectionList collections={collections} />
			<Suspense>
				<SuggestedProducts />
			</Suspense>
		</section>
	);
}
