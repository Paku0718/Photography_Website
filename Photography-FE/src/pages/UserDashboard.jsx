import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserDashboard() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const userEmail = localStorage.getItem("email");

  useEffect(() => {
    fetchPackages();
    fetchUserName();
  }, []);

  const fetchPackages = async () => {
    try {
      const res = await axios.get("https://localhost:7066/api/package/all");
      setPackages(res.data);
    } catch (error) {
      console.error("Failed to fetch packages:", error.message);
      toast.error("Failed to load packages");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserName = async () => {
    try {
      const res = await axios.get(`https://localhost:7066/api/auth/profile?email=${userEmail}`);
      setUserName(res.data.name);
    } catch (err) {
      console.error("Failed to fetch user name:", err.message);
      toast.error("Unable to load user profile");
    }
  };

  const handleBook = async (packageData) => {
    try {
      await axios.post("https://localhost:7066/api/booking/book", {
        userEmail: userEmail,
        packageId: packageData.id
      });

      toast.success(`Booked "${packageData.title}" successfully 🎉`);
    } catch (error) {
      console.error("Booking error:", error.message);
      toast.error("Failed to book package ❌");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center mb-2">
          {userName ? `Welcome, ${userName}` : "Welcome!"}
        </h2>
        <h3 className="text-xl font-semibold text-center text-gray-300 mb-6">
          Available Photography Packages
        </h3>

        {loading ? (
          <p className="text-center text-gray-400">Loading packages...</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl shadow-lg border border-purple-500/20 hover:border-purple-400/40 backdrop-blur-sm transition transform hover:scale-105"
              >
                <img
                  src={pkg.imageUrl}
                  alt={pkg.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-1">{pkg.title}</h4>
                  <p className="text-sm text-gray-300 mb-2">{pkg.description}</p>
                  <p className="text-pink-400 font-semibold mb-4">
                    ₹ {Number(pkg.price).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleBook(pkg)}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-2 rounded-full font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default UserDashboard;
