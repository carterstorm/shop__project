import { Suspense } from "react";
import { getCollections } from "@/api/collections";
import { CollectionList } from "@/ui/organisms/CollectionList";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { PageHeader } from "@/ui/molecules/PageHeader";
import { PageHeaderHeading } from "@/ui/atoms/PageHeaderHeading";
import { PageHeaderParagraph } from "@/ui/atoms/PageHeaderParagraph";
import { getNumberOfAllProductsAndAllPages, getProductsList } from "@/api/products";

export default async function Home() {
	const collections = await getCollections(3);
	const { numberOfAllProducts } = await getNumberOfAllProductsAndAllPages();
	const suggestedProducts = await getProductsList(numberOfAllProducts, 0);

	return (
		<section className="mx-auto lg:max-w-7xl lg:px-0">
			<PageHeader>
				<PageHeaderHeading>our new collection</PageHeaderHeading>
				<PageHeaderParagraph>Check out our new collection today!</PageHeaderParagraph>
			</PageHeader>
			<CollectionList collections={collections} />
			<Suspense>
				<SuggestedProducts suggestedProducts={suggestedProducts} />
			</Suspense>
		</section>
	);
}
