import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_PRIVATE);

export async function POST(req, res) {
    const { paymentMethodId, email, ...orderDetails } = await req.json();

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 10000,
            currency: "gbp",
            payment_method: paymentMethodId,
            confirm: true,
            receipt_email: email,
            return_url: "https://Relohub.co.uk/offer",
        });

        return NextResponse.json({ id: paymentIntent.id }, { status: 200 });
    } catch (error) {
        console.log("stripe payment error:" + error.message);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
