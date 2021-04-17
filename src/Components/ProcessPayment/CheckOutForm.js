// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";
// const CheckOutForm = ({ orderDetails }) => {
//   console.log("hey sagar----", orderDetails);
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     // Block native form submission.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }

//     // Get a reference to a mounted CardElement. Elements knows how
//     // to find your CardElement because there can only ever be one of
//     // each type of element.
//     const cardElement = elements.getElement(CardElement);

//     // Use your card Element with other Stripe.js APIs
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: cardElement,
//     });

//     if (error) {
//       console.log("[error]", error);
//     } else {
//       console.log("[PaymentMethod]", paymentMethod);
//       submitOrder(paymentMethod.id, paymentMethod.card, paymentMethod.type);
//     }
//   };
//   const submitOrder = (paymentId, cardInfo, paymentType) => {
//     console.log({ ...orderDetails, paymentId, cardInfo, paymentType });

//     // axios
//     //   .post("http://localhost:4000/book-service", orderDetails)
//     //   .then(function (response) {
//     //     console.log(response);
//     //   })
//     //   .catch(function (error) {
//     //     console.log(error);
//     //   });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: 17,
//               color: "#424770",
//               letterSpacing: "0.025em",
//               fontFamily: "Source Code Pro, monospace",
//               "::placeholder": {
//                 color: "#aab7c4",
//               },
//             },
//             invalid: {
//               color: "#9e2146",
//             },
//           },
//         }}
//       />
//       <button type="submit" disabled={!stripe} className="btn btn-info m-4">
//         {`Pay $ ${orderDetails.price}`}
//       </button>
//     </form>
//   );
// };

// export default CheckOutForm;

// // This example shows you how to set up React Stripe.js and use Elements.
// // Learn how to accept a payment using the official Stripe docs.
// // https://www.stripe.com/docs/payments/integration-builder
import React, { useMemo } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: 17,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const PaymentModal = ({ orderDetails }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    // console.log("[PaymentMethod]", payload);

    if (payload.error) {
      console.log("[error]", payload.error);
    } else {
      console.log("[PaymentMethod]", payload);
      const paymentMethod = payload.paymentMethod;
      submitOrder(paymentMethod.id, paymentMethod.card, paymentMethod.type);
    }
  };
  const submitOrder = (paymentId, cardInfo, paymentType) => {
    console.log({ ...orderDetails, paymentId, cardInfo, paymentType });

    axios
      .post("http://localhost:4000/book-service", orderDetails)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column align-items-center payment-form "
    >
      <label className="w-100">
        Card number
        <CardNumberElement />
      </label>
      <label className="w-100">
        Expiration date
        <CardExpiryElement options={options} />
      </label>
      <label className="w-100">
        CVC
        <CardCvcElement options={options} />
      </label>

      <button type="submit" disabled={!stripe} className="btn btn-info m-4">
        {`Pay $ ${orderDetails.price}`}
      </button>
    </form>
  );
};

export default PaymentModal;
