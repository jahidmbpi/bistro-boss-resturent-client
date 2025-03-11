import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";

import UseCard from "../../sheard/useCard/UseCard";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const CheakoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [data, isLoading, refetch] = UseCard();
  console.log(data);

  const [clientSecret_key, setlientSecret_key] = useState();
  const totalPrice = data?.reduce(
    (total, item) => total + (item.price || 0),
    0
  );
  console.log(totalPrice);
  const { user } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    if (totalPrice) {
      axios
        .post("http://localhost:5000/create-payment-intent", { totalPrice })
        .then((res) => {
          console.log("hello data", res.data.clientSecret);
          setlientSecret_key(res.data.clientSecret);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    const { paymentIntent, error: cardError } = await stripe.confirmCardPayment(
      clientSecret_key,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name || "anomious",
            email: user?.email || "anomious",
          },
        },
      }
    );
    if (cardError) {
      console.log("error", cardError);
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log(paymentIntent.id);
      }
      if (paymentIntent.id) {
        const paymentInfo = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          menuId: data.map((item) => item.menuId),
          cardId: data.map((item) => item._id),
          status: "pending",
        };
        console.log(paymentInfo);
        axios
          .post("http://localhost:5000/payments", paymentInfo)
          .then((res) => {
            console.log(res.data);
            Swal.fire({
              title: "order comfrim success",
              icon: "success",
              draggable: true,
            });
            refetch();
          });
      }
    }
  };
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="flex justify-center flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500 mb-4"></div>
          <h1 className="text-lg">
            Loading
            <span className="text-2xl font-semibold">
              <span className="dot-animation">.</span>
              <span className="dot-animation">.</span>
              <span className="dot-animation">.</span>
            </span>
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary mt-6"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheakoutForm;
