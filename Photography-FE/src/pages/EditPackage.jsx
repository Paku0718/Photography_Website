import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditPackage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  useEffect(() => {
    fetchPackage();
  }, []);

  const fetchPackage = async () => {
    try {
      const res = await axios.get(
        `https://localhost:7066/api/package/${id}`
      );

      console.log("Fetched package →", res.data);

      // 🟢 Normalise data so every field has a valid value
      setFormData({
        title: res.data.title || "",
        description: res.data.description || "",
        price:
          res.data.price !== null && res.data.price !== undefined
            ? Number(res.data.price) // convert decimal string → number
            : "",
        imageUrl: res.data.imageUrl || "",
      });
    } catch (error) {
      console.error("Error fetching package:", error);
      toast.error("Failed to fetch package data ❌");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://localhost:7066/api/package/update/${id}`,
        {
          ...formData,
          price: Number(formData.price), // ensure backend gets a number
        },
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success("Package updated successfully ✅");
      setTimeout(() => navigate("/admin/dashboard"), 1500);
    } catch (error) {
      console.error("Error updating package:", error);
      toast.error("Failed to update package ❌");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-16">
        <p className="text-gray-600">Loading package…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 mt-16">
      <div className="w-full max-w-xl bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Package ✏️</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              step="0.01"
              name="price"
              value={String(formData.price)}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Update Package
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default EditPackage;
