import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-600 text-white flex-1">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-lg mt-2">We’d love to hear from you. Let’s connect!</p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg flex-1">
        <h2 className="text-3xl font-semibold text-center">Send Us a Message</h2>
        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 text-center bg-gray-50 flex-1">
        <h2 className="text-3xl font-semibold">Contact Information</h2>
        <p className="mt-4 text-gray-600">Reach out to us through the following ways:</p>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">📍 Address</h3>
            <p className="mt-2 text-gray-600">123 Consulting St, Business City</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">📞 Phone</h3>
            <p className="mt-2 text-gray-600">+1 234 567 890</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">📧 Email</h3>
            <p className="mt-2 text-gray-600">contact@consulting.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-blue-600 text-white text-center">
        <p>© 2025 Consultation Services. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
