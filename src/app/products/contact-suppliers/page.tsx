"use client";
// ContactSuppliers.js
import React, { useState } from "react";

const ContactSuppliers = () => {
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", form);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Your Logo</div>
          <nav className="space-x-4">
            <a href="/" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a href="/products" className="text-gray-600 hover:text-gray-800">
              Products
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-800">
              About Us
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800">
              Contact Us
            </a>
            <a href="/help" className="text-gray-600 hover:text-gray-800">
              Help Center
            </a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          Contact Suppliers
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Reach out to us for supply inquiries or partnership opportunities.
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="companyName"
              className="block text-gray-700 font-bold mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="Enter your company name"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contactName"
              className="block text-gray-700 font-bold mb-2"
            >
              Contact Name
            </label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              value={form.contactName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="product"
              className="block text-gray-700 font-bold mb-2"
            >
              Product Interested In
            </label>
            <select
              id="product"
              name="product"
              value={form.product}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              required
            >
              <option value="">Select a product</option>
              <option value="Product1">Product 1</option>
              <option value="Product2">Product 2</option>
              <option value="Product3">Product 3</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default ContactSuppliers;
