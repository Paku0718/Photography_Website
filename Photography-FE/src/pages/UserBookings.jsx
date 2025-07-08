import React, { useEffect, useState } from "react";
import axios from "axios";

function UserBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const userEmail = localStorage.getItem("email");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        `https://localhost:7066/api/booking/user/${userEmail}`
      );
      setBookings(res.data);
    } catch (error) {
      console.error("Error fetching user bookings:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-black to-pink-900 text-white pt-24 px-4">
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 border border-purple-500/30">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          📷 My Bookings
        </h2>

        {loading ? (
          <p className="text-center text-gray-300">Loading bookings...</p>
        ) : bookings.length === 0 ? (
          <p className="text-center text-gray-300">You haven’t made any bookings yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-sm text-white border border-purple-500/30">
              <thead className="bg-purple-900/40 text-purple-200">
                <tr>
                  <th className="px-4 py-3 border border-purple-500/20">#</th>
                  <th className="px-4 py-3 border border-purple-500/20 text-left">Package</th>
                  <th className="px-4 py-3 border border-purple-500/20 text-left">Booking Date</th>
                  <th className="px-4 py-3 border border-purple-500/20 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={booking.id} className="hover:bg-purple-900/30 transition">
                    <td className="px-4 py-2 border border-purple-500/10 text-center">{index + 1}</td>
                    <td className="px-4 py-2 border border-purple-500/10">{booking.packageTitle}</td>
                    <td className="px-4 py-2 border border-purple-500/10">
                      {new Date(booking.bookingDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 border border-purple-500/10">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          booking.status === "Confirmed"
                            ? "bg-green-500/20 text-green-300"
                            : booking.status === "Pending"
                            ? "bg-yellow-500/20 text-yellow-300"
                            : "bg-gray-500/20 text-gray-300"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserBookings;
