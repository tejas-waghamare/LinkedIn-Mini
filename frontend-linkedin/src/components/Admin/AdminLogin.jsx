// src/components/Admin/AdminLogin.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../context/admin";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { adminLogin } = useContext(AdminContext);
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name] || errors.msg) {
      setErrors({ ...errors, [e.target.name]: "", msg: "" });
    }
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!validateEmail(email)) newErrors.email = "Please enter a valid email";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      await adminLogin({ email, password });
      navigate("/admin/dashboard");
    } catch (err) {
      setErrors(err);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isSubmitting && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center">
          <svg
            className="animate-spin h-20 w-20 text-fuchsia-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          <span className="text-3xl py-5 font-serif text-sky-400 animate-pulse">
            Admin logging in...
          </span>
        </div>
      )}

      <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-2xl rounded-xl p-8">
          <h2 className="text-3xl font-extrabold text-center text-red-600 mb-6">
            Admin Login 🔐
          </h2>

          {errors.msg && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md mb-4 text-center text-sm">
              {errors.msg}
            </div>
          )}

          <form className="space-y-5" onSubmit={onSubmit}>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Admin email"
                value={email}
                onChange={onChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                name="password"
                type="password"
                placeholder="Admin password"
                value={password}
                onChange={onChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-medium transition duration-200 flex justify-center items-center gap-2"
            >
              {isSubmitting ? "Signing in..." : "Sign in as Admin"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
