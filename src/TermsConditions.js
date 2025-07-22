import React from "react";

const menuFont = { fontFamily: "'Roboto Slab', serif" };

const TermsConditions = () => (
  <main className="flex-1 flex justify-center items-start pt-16 pb-16 px-2 sm:px-4">
    <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full mt-4 p-8 sm:p-12 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center" style={menuFont}>Terms and Conditions-Roboracter</h1>
      <p className="mb-8 text-gray-700 text-lg text-center" style={menuFont}>Welcome to Roboracter. These Terms and Conditions govern your use of our website, products, and services. By accessing or using our platform, you agree to comply with and be bound by these terms.</p>
      <ol className="list-decimal pl-6 space-y-6 text-gray-800 text-base" style={menuFont}>
        <li>
          <span className="font-semibold">General</span><br />
          Roboracter is a robotics-focused brand established in 2025. We offer robotics kits, components, workshops, and related services to students, educators, and makers. These terms apply to all users of our website and customers of our services.
        </li>
        <li>
          <span className="font-semibold">Orders and Payments</span><br />
          All orders must be paid in full at the time of purchase.<br />
          Prices are subject to change without notice.<br />
          We reserve the right to cancel or refuse any order at our discretion.
        </li>
        <li>
          <span className="font-semibold">Shipping and Delivery</span><br />
          We aim to ship orders within the stated timelines, but delivery times may vary based on location and availability.<br />
          Customers are responsible for providing accurate shipping details.<br />
          We are not liable for delays caused by courier services or incorrect addresses.
        </li>
        <li>
          <span className="font-semibold">Cancellations and Refunds</span><br />
          Orders can be canceled within 72 hours of purchase.<br />
          Refunds are only issued if requested within 72 hours; after this time, kits are considered in production and non-refundable.<br />
          Full details are outlined in our Refund and Cancellation Policy.
        </li>
        <li>
          <span className="font-semibold">Use of Products</span><br />
          Our kits and components are intended for educational and hobby use.<br />
          Roboracter is not responsible for any injury or damage caused by misuse of our products.<br />
          Users must follow all provided instructions and safety guidelines.
        </li>
        <li>
          <span className="font-semibold">Intellectual Property</span><br />
          All content, designs, and materials on the Roboracter website are the intellectual property of Roboracter unless otherwise stated.<br />
          You may not copy, reproduce, or redistribute any material without prior written permission.
        </li>
        <li>
          <span className="font-semibold">Privacy</span><br />
          We respect your privacy and handle your data according to our Privacy Policy.<br />
          By using our site, you consent to the collection and use of information as outlined.
        </li>
        <li>
          <span className="font-semibold">Limitation of Liability</span><br />
          Roboracter shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our products or website.
        </li>
        <li>
          <span className="font-semibold">Changes to Terms</span><br />
          We reserve the right to update or modify these terms at any time. Continued use of our services after changes means you accept the updated terms.
        </li>
        <li>
          <span className="font-semibold">Contact Us</span><br />
          If you have any questions about these Terms and Conditions, please contact us at:<br />
          <span role="img" aria-label="email">📧</span> <a href="mailto:roboracterofficial@gmail.com" className="text-blue-700 underline">roboracterofficial@gmail.com</a>
        </li>
      </ol>
    </div>
  </main>
);

export default TermsConditions; 