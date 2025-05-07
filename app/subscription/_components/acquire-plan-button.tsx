"use client";

import { Button } from "@/app/_components/ui/button";
import { createStripeCheckout } from "../_actions/create-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const AcquirePlanButton = () => {
  const { user } = useUser();

  const hasPremiumPlan = user?.publicMetadata.subscriptionPlan === "premium";

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

  if (hasPremiumPlan) {
    return (
      <Button
        className="mt-6 w-full rounded-full font-bold hover:text-primary/80 hover:no-underline"
        variant={"link"}
      >
        <Link
          href={`${process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL as string}?prefilled_email=${user?.primaryEmailAddress?.emailAddress}`}
        >
          Gerenciar Plano
        </Link>
      </Button>
    );
  }

  return (
    <Button
      className="mt-6 w-full rounded-full font-bold hover:text-primary/80 hover:no-underline"
      onClick={handleAcquirePlanClick}
    >
      Adquirir Plano
    </Button>
  );
};

export default AcquirePlanButton;
