import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getCollectionBySlug } from "@/api/collection";
import { ProductList } from "@/ui/organisms/ProductList";
import { PageHeader } from "@/ui/molecules/PageHeader";
import { PageHeaderHeading } from "@/ui/atoms/PageHeaderHeading";
import { PageHeaderParagraph } from "@/ui/atoms/PageHeaderParagraph";

export const generateMetadata = async ({
	params,
}: {
	params: { collectionName: string };
}): Promise<Metadata> => {
	const collection = await getCollectionBySlug(params.collectionName);

	if (!collection) {
		return { title: "Collection Not Found" };
	}

	return {
		title: collection.name,
		description: collection.description,
		openGraph: {
			title: collection.name,
			description: collection.description,
		},
	};
};

export default async function CollectionPage({ params }: { params: { collectionName: string } }) {
	const collection = await getCollectionBySlug(params.collectionName);

	if (!collection) {
		return notFound();
	}

	return (
		<section className="mx-auto lg:max-w-7xl lg:px-0">
			<PageHeader>
				<PageHeaderHeading>{collection.name}</PageHeaderHeading>
				<PageHeaderParagraph>{collection.description}</PageHeaderParagraph>
			</PageHeader>
			<ProductList products={collection.products} />
		</section>
	);
}
