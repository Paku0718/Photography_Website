import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddPackage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { title, description, price } = formData;

    if (title.trim().length < 3) {
      toast.error("Title must be at least 3 characters long.");
      return false;
    }

    if (description.trim().length < 10) {
      toast.error("Description must be at least 10 characters long.");
      return false;
    }

    const priceValue = parseFloat(price);
    if (isNaN(priceValue) || priceValue <= 0) {
      toast.error("Price must be a valid number greater than 0.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post("https://localhost:7066/api/package/add", formData, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Package added successfully 🎉");

      setFormData({
        title: "",
        description: "",
        price: "",
        imageUrl: "",
      });
    } catch (error) {
      console.error("Add package failed:", error);
      toast.error("Error adding package ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-950 px-4 pt-24">
      <div className="w-full max-w-xl bg-gradient-to-br from-purple-800/20 to-pink-800/20 backdrop-blur-md border border-purple-400/30 rounded-3xl shadow-xl p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Add New Package 📦
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium text-purple-300 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Package Title"
              className="w-full bg-black/40 border border-purple-500/30 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block font-medium text-purple-300 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the package..."
              rows="4"
              className="w-full bg-black/40 border border-purple-500/30 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <div>
            <label className="block font-medium text-purple-300 mb-1">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full bg-black/40 border border-purple-500/30 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block font-medium text-purple-300 mb-1">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg (optional)"
              className="w-full bg-black/40 border border-purple-500/30 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-full transition-transform transform hover:scale-105"
          >
            Add Package
          </button>
        </form>

        <ToastContainer position="top-center" autoClose={2000} theme="dark" />
      </div>
    </div>
  );
}

export default AddPackage;
