import React from "react";

const menuFont = { fontFamily: "'Roboto Slab', serif" };

const PrivacyPolicy = () => (
  <main className="flex-1 flex justify-center items-start px-2 sm:px-4" style={{paddingTop: 90, paddingBottom: 20}}>
    <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full mt-0 p-8 sm:p-12 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center" style={menuFont}>Privacy Policy – Roboracter</h1>
      <p className="mb-8 text-gray-700 text-lg text-center" style={menuFont}>At Roboracter, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website and services.</p>
      <ol className="list-decimal pl-6 space-y-6 text-gray-800 text-base" style={menuFont}>
        <li>
          <span className="font-semibold">Information We Collect:</span><br />
          We may collect personal details such as your name, email address, contact number, and payment information when you register, place an order, or subscribe to our services. We also collect non-personal data like browser type and usage statistics through cookies.
        </li>
        <li>
          <span className="font-semibold">How We Use Your Information:</span><br />
          Your information is used to process orders, provide customer support, improve our services, and send updates or promotional materials (only with your consent). We do not sell or share your personal data with third parties for marketing purposes.
        </li>
        <li>
          <span className="font-semibold">Data Protection:</span><br />
          We implement industry-standard security measures to protect your personal data against unauthorized access, loss, or misuse.
        </li>
        <li>
          <span className="font-semibold">Cookies:</span><br />
          Our website uses cookies to enhance user experience. You can choose to disable cookies in your browser settings.
        </li>
        <li>
          <span className="font-semibold">Third-Party Links:</span><br />
          Roboracter may contain links to external sites. We are not responsible for the privacy practices of these sites.
        </li>
        <li>
          <span className="font-semibold">Your Rights:</span><br />
          You have the right to access, update, or delete your personal data at any time by contacting us.
        </li>
        <li>
          <span className="font-semibold">Changes to This Policy:</span><br />
          We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date.
        </li>
      </ol>
      <h2 className="text-xl font-bold text-red-700 mt-10 mb-2" style={menuFont}>Contact Us:</h2>
      <p className="text-gray-700" style={menuFont}>If you have any questions about our privacy practices, please contact us at <a href="mailto:roboracterofficial@gmail.com" className="text-blue-700 underline">roboracterofficial@gmail.com</a>.</p>
    </div>
  </main>
);

export default PrivacyPolicy; 