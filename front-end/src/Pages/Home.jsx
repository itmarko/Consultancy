import React from "react";
import { Link } from "react-router-dom";
import CalltoAction from "../Components/CallToAction/CallToAction";
import About from "./About/About";
const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Expert Consultation Services</h1>
        <p className="text-lg mt-4">
          Get professional advice tailored to your needs.
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200">
          Book a Consultation
        </button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold">Creating Website</h3>
            <p className="mt-2 text-gray-600">
              Boost your business with expert strategies.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold">API Integration</h3>
            <p className="mt-2 text-gray-600">
              Plan your finances with confidence.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold">Custom Website</h3>
            <p className="mt-2 text-gray-600">
              Achieve your personal and career goals.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700">
          We provide top-notch consultation services to help you make informed
          decisions and grow in your field.
        </p>
      </section>
      <About />
      {/* Contact Section */}
      <div className="rwt-callto-action-area bg-gray-800 py-20">
        <div className="wrapper max-w-screen-lg mx-auto px-4">
          <CalltoAction />
        </div>
      </div>
    </div>
  );
};

export default Home;
