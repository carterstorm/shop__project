/// <reference types="stripe-event-types" />
import { type NextRequest } from "next/server";
import { Stripe } from "stripe";

export async function POST(request: NextRequest): Promise<Response> {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Stripe secret key is not provided");
	}

	if (!process.env.STRIPE_WEBHOOK_SECRET) {
		throw new Error("Stripe webhook key is not provided");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const signature = request.headers.get("stripe-signature");

	if (!signature) {
		return new Response("Stripe signature is not provided", { status: 400 });
	}

	const stripeEvent = stripe.webhooks.constructEvent(
		await request.text(),
		signature,
		process.env.STRIPE_WEBHOOK_SECRET,
	) as Stripe.DiscriminatedEvent;

	switch (stripeEvent.type) {
		case "checkout.session.completed":
			console.log("Payment completed");
			break;
		case "checkout.session.async_payment_succeeded":
			console.log("Payment succeeded");
			break;
		case "checkout.session.async_payment_failed":
			console.log("Payment failed");
			break;
		case "checkout.session.expired":
			console.log("Checkout session expired");
			break;
		default:
			console.log("Unhandled event");
			break;
	}
	return new Response(null, { status: 204 });
}
