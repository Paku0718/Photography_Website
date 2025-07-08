import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Camera, Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await axios.post("https://localhost:7066/api/auth/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Login successful 🔐");

      localStorage.setItem("role", res.data.role);
      localStorage.setItem("email", res.data.email);

      setTimeout(() => {
        if (res.data.role === "Admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/user/dashboard");
        }
      }, 1500);
    } catch (error) {
      toast.error(error.response?.data || "Login failed ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/50 to-pink-900/50" />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Camera className="h-10 w-10 text-purple-400" />
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                PhotoBooking
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-gray-300">Sign in to your account</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-purple-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-12 py-3 bg-black/30 border border-purple-500/30 rounded-lg focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg"
            >
              {isSubmitting ? (
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
              ) : (
                <>
                  <LogIn className="h-5 w-5" />
                  <span>Sign In</span>
                </>
              )}
            </button>

            <div className="text-center">
              <a href="#" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                Forgot your password?
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-1 h-px bg-purple-500/30"></div>
              <span className="text-gray-400 text-sm">or</span>
              <div className="flex-1 h-px bg-purple-500/30"></div>
            </div>

            <div className="text-center">
              <p className="text-gray-300">
                Don't have an account?{" "}
                <a href="/register" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                  Create Account
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="text-center mt-6 text-gray-400 text-sm">
          <p>© 2025 PhotoBooking. All rights reserved.</p>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default Login;
