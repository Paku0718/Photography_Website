import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllBookings();
  }, []);

  const fetchAllBookings = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://localhost:7066/api/booking/all");
      setBookings(res.data);
    } catch (err) {
      console.error("Fetch bookings error:", err);
      toast.error("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  const confirmBooking = async (id) => {
    try {
      await axios.put(`https://localhost:7066/api/booking/confirm/${id}`);
      toast.success("Booking confirmed ✅");
      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: "Confirmed" } : b))
      );
    } catch (err) {
      console.error("Confirm booking error:", err);
      toast.error("Could not confirm booking");
    }
  };

  const deleteBooking = async (id) => {
    const ok = window.confirm("Are you sure you want to cancel this booking?");
    if (!ok) return;

    try {
      await axios.delete(`https://localhost:7066/api/booking/delete/${id}`);
      toast.success("Booking cancelled 🗑️");
      setBookings((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      console.error("Delete booking error:", err);
      toast.error("Could not cancel booking");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-black to-pink-900 text-white pt-24 px-4">
      <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 border border-purple-500/30">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          📅 All User Bookings
        </h2>

        {loading ? (
          <p className="text-center text-gray-300">Loading bookings…</p>
        ) : bookings.length === 0 ? (
          <p className="text-center text-gray-300">No bookings found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm text-white border border-purple-500/30">
              <thead className="bg-purple-900/40 text-purple-200">
                <tr>
                  <th className="p-3 border border-purple-500/20">#</th>
                  <th className="p-3 border border-purple-500/20">User Email</th>
                  <th className="p-3 border border-purple-500/20">Package</th>
                  <th className="p-3 border border-purple-500/20">Booking Date</th>
                  <th className="p-3 border border-purple-500/20">Status</th>
                  <th className="p-3 border border-purple-500/20">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, idx) => (
                  <tr key={b.id} className="hover:bg-purple-900/30 transition">
                    <td className="p-3 border border-purple-500/10 text-center">{idx + 1}</td>
                    <td className="p-3 border border-purple-500/10">{b.userEmail}</td>
                    <td className="p-3 border border-purple-500/10">{b.packageTitle}</td>
                    <td className="p-3 border border-purple-500/10">
                      {new Date(b.bookingDate).toLocaleDateString()}
                    </td>
                    <td className="p-3 border border-purple-500/10 text-center">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          b.status === "Confirmed"
                            ? "bg-green-500/20 text-green-300"
                            : "bg-yellow-500/20 text-yellow-300"
                        }`}
                      >
                        {b.status}
                      </span>
                    </td>
                    <td className="p-3 border border-purple-500/10 text-center space-x-2">
                      {b.status !== "Confirmed" && (
                        <button
                          onClick={() => confirmBooking(b.id)}
                          className="bg-green-600 hover:bg-green-700 text-white text-xs px-4 py-2 rounded shadow"
                        >
                          Confirm
                        </button>
                      )}
                      <button
                        onClick={() => deleteBooking(b.id)}
                        className="bg-red-600 hover:bg-red-700 text-white text-xs px-4 py-2 rounded shadow"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default AdminBookings;
