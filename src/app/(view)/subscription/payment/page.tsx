import { CheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./payment-form";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const fetchClientSecret = () => {
  return fetch("/create-checkout-session", { method: "POST" })
    .then((response) => response.json())
    .then((json) => json.checkoutSessionClientSecret);
};

export default function Page() {
  return (
    <CheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
      <PaymentForm id={"1"} price={"23"} />
    </CheckoutProvider>
  );
}
