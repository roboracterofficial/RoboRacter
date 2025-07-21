import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const menuFont = { fontFamily: "'Roboto Slab', serif" };

function ContactModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    if (!name || !email || !mobile || !inquiry) return "All fields are required.";
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Invalid email address.";
    if (!/^\d{10,}$/.test(mobile)) return "Enter a valid mobile number.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const err = validate();
    if (err) return setError(err);
    setLoading(true);
    try {
      await emailjs.send(
        'service_6busj2r',
        'template_t9zf8jm',
        {
          user_name: name,
          user_email: email,
          user_mobile: mobile,
          inquiry: inquiry,
        },
        'aW_sK1wyKBBq-H7An'
      );
      // Send auto-reply to user
      await emailjs.send(
        'service_6busj2r',
        'template_xeijube', // <-- your auto-reply template ID
        {
          user_name: name,
          user_email: email,
          inquiry: inquiry,
        },
        'aW_sK1wyKBBq-H7An'
      );
      setSuccess("Your inquiry has been sent! We'll get in touch soon.");
      setName(""); setEmail(""); setMobile(""); setInquiry("");
    } catch (err) {
      setError("Failed to send. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-red-500"
          style={{ fontStyle: "normal", fontWeight: "bold", fontFamily: "Arial, sans-serif" }}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700" style={menuFont}>Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded p-2"
            value={name}
            onChange={e => setName(e.target.value)}
            style={menuFont}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded p-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={menuFont}
            required
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border rounded p-2"
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            style={menuFont}
            required
          />
          <textarea
            placeholder="Inquiry Description"
            className="w-full border rounded p-2 min-h-[100px]"
            value={inquiry}
            onChange={e => setInquiry(e.target.value)}
            style={menuFont}
            required
          />
          {error && <div className="text-red-600 text-sm">{error}</div>}
          {success && <div className="text-green-600 text-sm">{success}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-bold"
            disabled={loading}
            style={menuFont}
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal; 