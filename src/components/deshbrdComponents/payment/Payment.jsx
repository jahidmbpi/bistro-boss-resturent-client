import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../sheard/sectionTitel/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheakoutForm from "../cheakOut From/CheakoutForm";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);
  return (
    <div className="min-h-screen">
      <SectionTitle
        smalltitle="please payment"
        bigtitle="pay frist and eat"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheakoutForm></CheakoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
