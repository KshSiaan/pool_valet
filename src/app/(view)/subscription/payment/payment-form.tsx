/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { useCookies } from "react-cookie";
import { usePathname } from "next/navigation";

import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import howl from "@/lib/howl";
import { toast } from "sonner";
import { AnyType } from "@/lib/config/error-type";

const stripePromise = loadStripe(
  "pk_test_51QKAtBKOpUtqOuW1x5VdNqH3vG7CZZl1P6V3VuV1qsRUmPLNk26i34AXeu2zCO3QurFJAOZ9zfb0EkWeCVhqBYgH008X41cXr6"
);
const CheckoutForm = ({
  price,
  clientSecret,
  id,
}: {
  price: string;
  clientSecret: string;
  id: string | number;
}) => {
  const [cookies] = useCookies(["raven"]);
  const path = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferedLink, setPreferedLink] = useState<string>("/");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    // Call elements.submit() to collect data
    const { error: submitError } = await elements.submit();
    if (submitError) {
      console.error(submitError.message);
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: window.location.origin,
      },
      redirect: "if_required",
    });

    if (error) {
      console.error(error.message);
    } else if (paymentIntent.status === "succeeded") {
      // console.log("Payment successful!");
      const readyData = {
        subscription_id: id,
        payment_intent_id: paymentIntent.id,
      };
      // console.log(readyData);
      try {
        const call: AnyType = await howl({
          link: "/provider/buy-plan-success",
          token: cookies.raven,
          method: "post",
          data: readyData,
        });

        if (!call.status) {
          toast.error(call.message ?? "Payment failed");
          return;
        } else {
          toast.success(call.message);
          setPreferedLink(`/success`);
          showModal();
        }
      } catch (error) {
        alert("Payment was successful but couldn't add to database");
      }
    }

    if (error) alert(error.message);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <Button
          className="!bg-[#7849D4] hover:!bg-[#7849D4] !text-background !border-none w-full mt-12"
          disabled={!stripe || !elements}
        >
          Pay ${parseInt(price).toFixed(2)} (with charge)
        </Button>
      </form>
    </>
  );
};

export default function PaymentForm({
  id,
  price,
}: {
  id: string;
  price: string;
}) {
  const [clientSecret, setClientSecret] = useState("");
  const [cookies] = useCookies(["raven"]);

  return clientSecret ? (
    <>
      <br />
      <Elements
        stripe={stripePromise}
        options={{
          // mode: "payment",
          // amount: 123,
          // currency: "usd",
          clientSecret,
        }}
      >
        <CheckoutForm id={id} clientSecret={clientSecret} price={price} />
      </Elements>
    </>
  ) : (
    <div className="h-[100px] w-full flex justify-center items-center">
      <Loader2Icon className="animate-spin !mr-4" />
      Preparing your order
    </div>
  );
}
