import React from "react";

const menuFont = { fontFamily: "'Roboto Slab', serif" };

const RefundPolicy = () => (
  <main className="flex-1 flex justify-center items-start pt-32 pb-16 px-2 sm:px-4">
    <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full mt-12 p-8 sm:p-12 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center" style={menuFont}>Refund and Cancellation Policy Roboracter</h1>
      <p className="mb-8 text-gray-700 text-lg text-center" style={menuFont}>At Roboracter, we strive to provide high-quality robotics kits and services. Please read our refund and cancellation policy carefully before making a purchase.</p>
      <ol className="list-decimal pl-6 space-y-6 text-gray-800 text-base" style={menuFont}>
        <li>
          <span className="font-semibold">Order Cancellation:</span><br />
          Orders can be canceled within 72 hours (3 days) of purchase. To request a cancellation, please contact us at <a href="mailto:roboracterofficial@gmail.com" className="text-blue-700 underline">roboracterofficial@gmail.com</a> with your order details.
        </li>
        <li>
          <span className="font-semibold">Refund Policy:</span><br />
          Refunds are only eligible if requested within 72 hours of placing the order. After this period, we cannot process refunds as the kits are already in production or dispatched.
        </li>
        <li>
          <span className="font-semibold">Exceptions:</span><br />
          Refunds or cancellations will not be entertained under the following conditions:
          <ul className="list-disc pl-6 mt-2">
            <li>Requests made after 72 hours of order placement.</li>
            <li>Incorrect shipping information provided by the customer.</li>
            <li>Damage caused by misuse or incorrect handling after delivery.</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">How to Request a Refund:</span><br />
          To initiate a refund within the eligible period, please email us with your order number, reason for the refund, and proof of payment. Approved refunds will be processed within 7–10 business days to the original payment method.
        </li>
      </ol>
      <h2 className="text-xl font-bold text-red-700 mt-10 mb-2" style={menuFont}>Contact Us:</h2>
      <p className="text-gray-700" style={menuFont}>For any queries regarding this policy, please reach out to <a href="mailto:roboracterofficial@gmail.com" className="text-blue-700 underline">roboracterofficial@gmail.com</a>.</p>
    </div>
  </main>
);

export default RefundPolicy; 