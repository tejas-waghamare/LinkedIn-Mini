// src/context/admin.jsx
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [adminLoading, setAdminLoading] = useState(true);

  const setAdminToken = (token) => {
    if (token) {
      axios.defaults.headers.common["x-admin-token"] = token;
    } else {
      delete axios.defaults.headers.common["x-admin-token"];
    }
  };

  const adminLogin = async (credentials) => {
    try {
      const res = await axios.post(`${API_BASE}/api/admin/login`, credentials, {
        headers: { "Content-Type": "application/json" },
      });

      // expect { token, admin: {...} } from backend
      localStorage.setItem("adminToken", res.data.token);
      setAdminToken(res.data.token);
      setAdmin(res.data.admin);
      return res.data;
    } catch (err) {
      throw err.response?.data || { msg: "Admin login failed. Please try again." };
    }
  };

  const adminLogout = (navigate) => {
    localStorage.removeItem("adminToken");
    setAdminToken(null);
    setAdmin(null);
    if (navigate) {
      navigate("/admin/login", { replace: true });
    }
  };

  const loadAdmin = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/admin/me`);
      setAdmin(res.data);
    } catch (err) {
      setAdmin(null);
      localStorage.removeItem("adminToken");
      setAdminToken(null);
    } finally {
      setAdminLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setAdminToken(token);
      loadAdmin();
    } else {
      setAdminLoading(false);
    }
  }, []);

  return (
    <AdminContext.Provider
      value={{
        admin,
        adminLoading,
        adminLogin,
        adminLogout,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
