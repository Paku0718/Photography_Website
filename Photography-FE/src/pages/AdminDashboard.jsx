import React, { useEffect, useState } from "react";
import { Package, Edit, Trash2, Image, DollarSign } from "lucide-react";

function AdminDashboard() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      // Replace with your actual API call
      const res = await fetch("https://localhost:7066/api/package/all", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!res.ok) {
        throw new Error('Failed to fetch packages');
      }
      
      const data = await res.json();
      setPackages(data);
    } catch (err) {
      console.error("Error fetching packages:", err);
      setError("Failed to load packages.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this package?");
    if (!confirm) return;

    try {
      const res = await fetch(`https://localhost:7066/api/package/delete/${id}`, {
        method: 'DELETE',
      });
      
      if (!res.ok) {
        throw new Error('Failed to delete package');
      }
      
      // Show success message (replace with your toast implementation)
      alert("Package deleted successfully 🗑️");
      setPackages((prev) => prev.filter((pkg) => pkg.id !== id));
    } catch (error) {
      console.error("Error deleting package:", error);
      // Show error message (replace with your toast implementation)
      alert("Failed to delete package ❌");
    }
  };

  const handleEdit = (id) => {
    // Navigate to edit page - replace with your actual routing implementation
    window.location.href = `/admin/edit-package/${id}`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-purple-900/20 to-pink-900/20 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-purple-900/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Package className="h-12 w-12 text-purple-400" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Manage your photography packages with style and efficiency
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/20">
          
          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
              <p className="text-gray-300 text-lg">Loading packages...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="text-center py-12">
              <div className="bg-red-500/20 border border-red-500/50 rounded-2xl p-6 max-w-md mx-auto">
                <p className="text-red-300 font-medium text-lg">{error}</p>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!loading && packages.length === 0 && !error && (
            <div className="text-center py-12">
              <Package className="h-24 w-24 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No packages available</p>
              <p className="text-gray-500 mt-2">Create your first package to get started</p>
            </div>
          )}

          {/* Packages Table */}
          {!loading && packages.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-purple-500/30">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-purple-400 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-purple-400 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-purple-400 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-purple-400 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-purple-400 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-purple-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-500/20">
                  {packages.map((pkg, index) => (
                    <tr key={pkg.id} className="hover:bg-purple-500/5 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-300">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-white">
                          {pkg.title}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-300 max-w-xs">
                          {pkg.description}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-1">
                          {/* <DollarSign className="h-4 w-4 text-green-400" /> */}
                          <span className="text-sm font-semibold text-green-400">
                            ₹{Number(pkg.price).toFixed(2)}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="group relative">
                          <img
                            src={pkg.imageUrl}
                            alt={pkg.title}
                            className="w-20 h-14 object-cover rounded-lg shadow-lg border border-purple-500/30 group-hover:border-purple-400/50 transition-all"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                            <Image className="h-4 w-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleEdit(pkg.id)}
                            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm px-4 py-2 rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25"
                          >
                            <Edit className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                            <span>Edit</span>
                          </button>
                          <button
                            onClick={() => handleDelete(pkg.id)}
                            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm px-4 py-2 rounded-full hover:from-red-600 hover:to-pink-600 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
                          >
                            <Trash2 className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                            <span>Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;