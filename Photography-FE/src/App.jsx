import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import AddPackage from "./pages/AddPackage";
import EditPackage from "./pages/EditPackage";
import UserBookings from "./pages/UserBookings";
import PackageList from "./pages/PackageList";
import AdminPackages from "./pages/AdminPackages";
import AdminBookings from "./pages/AdminBookings";

// Components
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Static Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-package"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <AddPackage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/packages"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <AdminPackages />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit-package/:id"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <EditPackage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/bookings"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <AdminBookings />
            </ProtectedRoute>
          }
        />

        {/* User Routes */}
        <Route
          path="/user/dashboard"
          element={
            <ProtectedRoute allowedRoles={["User"]}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/bookings"
          element={
            <ProtectedRoute allowedRoles={["User"]}>
              <UserBookings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/packages"
          element={
            <ProtectedRoute allowedRoles={["User"]}>
              <PackageList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
