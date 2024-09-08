import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
          We'd love to hear from you! Whether you have a question about Fassal, suggestions for improvement, or any other inquiries, feel free to reach out.
        </p>

        <div className="flex justify-center space-x-10 mb-10">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Email
            </h2>
            <p className="text-lg text-gray-700">vishalp9966@@gmail.com</p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Phone
            </h2>
            <p className="text-lg text-gray-700">+91 6387674208</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Connect with Vishal
        </h2>

        <div className="flex flex-col items-center space-y-6">
          <a
            href="https://www.linkedin.com/in/vishalpal-v96/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-blue-500 hover:underline"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/fvizpal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-gray-800 hover:underline"
          >
            GitHub
          </a>

          <a
            href="https://vishalpa1.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-gray-800 hover:underline"
          >
            Portfolio
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg p-4 rounded-lg bg-green-300 font-semibold text-gray-800 hover:underline"
          >
            Back Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
