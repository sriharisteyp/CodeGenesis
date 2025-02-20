"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState("channel"); // State to handle tab switching

  return (
    <div>
      <Header />

      <main className="bg-gray-900 py-10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Get in Touch with CodeGenesis</h1>

          {/* Tabs */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab("channel")}
              className={`px-4 py-2 rounded-md text-white font-semibold ${
                activeTab === "channel" ? "bg-indigo-600" : "bg-gray-800"
              }`}
            >
              YouTube Channel
            </button>
            <button
              onClick={() => setActiveTab("review")}
              className={`px-4 py-2 rounded-md text-white font-semibold ${
                activeTab === "review" ? "bg-indigo-600" : "bg-gray-800"
              }`}
            >
              Review
            </button>
          </div>

          {/* YouTube Channel Tab */}
          {activeTab === "channel" && (
            <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Join the CodeGenesis Community!
              </h2>
              <p className="text-gray-300 mb-6">
                Stay updated with the latest tech tutorials, coding tips, and development discussions by subscribing to our YouTube channel.
                Feel free to leave us feedback or ask questions below!
              </p>

              <form action="#" method="POST" className="space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-lg text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-lg text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-lg text-white">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="mt-2 px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Review Tab */}
          {activeTab === "review" && (
            <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Leave a Review
              </h2>
              <p className="text-gray-300 mb-6">
                Share your feedback about our channel. Your reviews help us improve and create more valuable content.
              </p>

              <form action="#" method="POST" className="space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="reviewName" className="text-lg text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="reviewName"
                    name="reviewName"
                    required
                    className="mt-2 px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="rating" className="text-lg text-white">
                    Rating
                  </label>
                  <input
                    type="number"
                    id="rating"
                    name="rating"
                    required
                    min="1"
                    max="5"
                    className="mt-2 px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Rate us (1-5)"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="reviewMessage" className="text-lg text-white">
                    Your Message
                  </label>
                  <textarea
                    id="reviewMessage"
                    name="reviewMessage"
                    required
                    rows={4}
                    className="mt-2 px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Write your review"
                  ></textarea>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="service" className="text-lg text-white">
                    Service
                  </label>
                  <input
                    type="text"
                    id="service"
                    name="service"
                    required
                    className="mt-2 px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Specify the content or tutorial you're reviewing"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-200"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
