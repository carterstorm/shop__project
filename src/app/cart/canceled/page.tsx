import { PageHeaderHeading } from "@/ui/atoms/PageHeaderHeading";
import { PageHeaderParagraph } from "@/ui/atoms/PageHeaderParagraph";
import { PageHeader } from "@/ui/molecules/PageHeader";

export default async function CartCanceledPage() {
	return (
		<section>
			<PageHeader>
				<PageHeaderHeading>Order canceled</PageHeaderHeading>
				<PageHeaderParagraph>Sorry, but your order has been canceled.</PageHeaderParagraph>
				<PageHeaderParagraph>
					You probably didn&apos;t complete the payment process or you canceled the order.
				</PageHeaderParagraph>
				<PageHeaderParagraph>Please complete your payment next time 😎</PageHeaderParagraph>
			</PageHeader>
		</section>
	);
}
