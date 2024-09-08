import LandNav from "@/components/shared/landNav";
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <LandNav />
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Fassal
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Fassal</strong> is a web application designed to streamline
          the process of buying and selling agricultural commodities through a
          transparent auction and bidding system. It connects farmers directly
          with middlemen, enabling them to list their products, participate in
          auctions, and conduct transactions seamlessly.
        </p>


        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Key Features:
        </h2>

        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
          <li>Transparent Auction System</li>
          <li>Real-time Market Prices</li>
          <li>Location Tracking for Efficient Logistics</li>
          <li>User-Friendly Interface</li>
          <li>Secure Payment Transactions</li>
          <li>Real-time Notifications for Auctions and Bids</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our mission at Fassal is to empower farmers by connecting them directly
          with middlemen, allowing them to gain better prices for their products
          and create a transparent and efficient marketplace. By leveraging
          technology, we aim to make the process of buying and selling
          agricultural commodities simpler, more transparent, and accessible to
          all.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          For any inquiries or feedback, please feel free to contact us at:
        </p>

        <ul className="text-lg text-gray-700 mb-6">
          <li>Email: vishalp9966@gmail.com</li>
          <li>LinkedIn: <a href="https://linkedin.com/in/vishalpal-v96" className="text-blue-500 hover:underline"> @fassal_app</a></li>
        </ul>
      </div>
    </div>
  );
};

export default About;
