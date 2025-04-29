"use client";

import { Button } from "@/app/_components/ui/button";
import { createStripeCheckout } from "../_actions/create-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";

const AcquirePlanButton = () => {
  const handleAcquirePlanClick = async () => {
    const { sessionId } = await createStripeCheckout();

    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
    );

    if (!stripe) {
      throw new Error("Stripe not loaded");
    }

    stripe.redirectToCheckout({ sessionId });
  };

  return (
    <>
      <Button
        className="mt-6 w-full rounded-full font-bold"
        onClick={handleAcquirePlanClick}
      >
        Adquirir Plano
      </Button>
    </>
  );
};

export default AcquirePlanButton;
