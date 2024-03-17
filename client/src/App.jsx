import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/pages/HomePage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Policy from "./components/pages/Policy";
import Pagenotfound from "./components/pages/Pagenotfound";
import Register from "./components/auth/Register";
import { Toaster } from "react-hot-toast";
import Login from "./components/auth/Login";
import Dashboard from "./components/pages/user/Dashboard";
import Privateroute from "./components/routs/Private";
import RequestForgotPassword from "./components/auth/RequestForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import AdminRoute from "./components/routs/AdminRoute";
import AdminDashboard from "./components/pages/admin/AdminDashboard";
import CreateCategory from "./components/pages/admin/CreateCategory";
import CreateProduct from "./components/pages/admin/CreateProduct";
import Users from "./components/pages/admin/Users";
import Orders from "./components/pages/user/Orders";
import Profile from "./components/pages/user/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Privateroute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<Users />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route
          path="/requestforgotpassword"
          element={<RequestForgotPassword />}
        />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
