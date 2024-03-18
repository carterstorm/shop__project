import { redirect } from "next/navigation";
import { Stripe } from "stripe";

export default async function CartSuccessPage({
	searchParams,
}: {
	searchParams: { session_id?: string };
}) {
	if (!searchParams.session_id) {
		redirect("/");
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Stripe secret key is not provided");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(searchParams.session_id);

	return (
		<>
			<h1>Thank you for your order!</h1>
			<p>Status: {stripeCheckoutSession.payment_status}</p>
		</>
	);
}
