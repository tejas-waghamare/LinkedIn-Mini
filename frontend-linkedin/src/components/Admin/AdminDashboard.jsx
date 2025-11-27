import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../context/admin";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

const AdminDashboard = () => {
  const { admin, adminLoading, adminLogout } = useContext(AdminContext);
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const [postSearch, setPostSearch] = useState("");

  const [confirm, setConfirm] = useState({ open: false, type: "", item: null });
  const [undoItem, setUndoItem] = useState(null);
  const [undoSeconds, setUndoSeconds] = useState(20);

  useEffect(() => {
    if (!adminLoading && !admin) navigate("/admin/login");
  }, [admin, adminLoading]);

  useEffect(() => {
    if (admin) {
      fetchUsers();
      fetchPosts();
    }
  }, [admin]);

  const fetchUsers = async () => {
    const res = await axios.get(`${API_BASE}/api/admin/actions/users`, {
      headers: { "x-admin-token": localStorage.getItem("adminToken") },
    });
    setUsers(res.data);
  };

  const fetchPosts = async () => {
    const res = await axios.get(`${API_BASE}/api/admin/actions/posts`, {
      headers: { "x-admin-token": localStorage.getItem("adminToken") },
    });
    setPosts(res.data);
  };

  const handleDelete = () => {
    const { type, item } = confirm;

    if (type === "user") setUsers(prev => prev.filter(u => u._id !== item._id));
    if (type === "post") setPosts(prev => prev.filter(p => p._id !== item._id));

    setUndoItem({ ...item, type });
    setUndoSeconds(20);

    setConfirm({ open: false, type: "", item: null });
  };

  // TIMER LOGIC
  useEffect(() => {
    if (!undoItem) return;

    if (undoSeconds === 0) {
      const url =
        undoItem.type === "user"
          ? `${API_BASE}/api/admin/actions/user/${undoItem._id}`
          : `${API_BASE}/api/admin/actions/post/${undoItem._id}`;

      axios.delete(url, {
        headers: { "x-admin-token": localStorage.getItem("adminToken") },
      });

      setUndoItem(null);
      return;
    }

    const timer = setTimeout(() => {
      setUndoSeconds(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [undoItem, undoSeconds]);

  const undoDelete = () => {
    if (!undoItem) return;

    if (undoItem.type === "user") setUsers(prev => [undoItem, ...prev]);
    if (undoItem.type === "post") setPosts(prev => [undoItem, ...prev]);

    setUndoItem(null);
  };

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
    u.email.toLowerCase().includes(userSearch.toLowerCase())
  );

  const filteredPosts = posts.filter(p =>
    p.text.toLowerCase().includes(postSearch.toLowerCase()) ||
    p.user?.name?.toLowerCase().includes(postSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen px-6 py-8 bg-slate-100">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button onClick={() => adminLogout(navigate)} className="bg-red-600 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>

      {/* USERS */}
      <input type="text" placeholder="Search users..." className="w-full p-2 border rounded mb-4"
        value={userSearch} onChange={e => setUserSearch(e.target.value)} />

      <table className="w-full bg-white rounded shadow mb-8">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(u => (
            <tr key={u._id}>
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3">
                <button
                  onClick={() => setConfirm({ open: true, type: "user", item: u })}
                  className="bg-red-100 text-red-600 px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* POSTS */}
      <input type="text" placeholder="Search posts..." className="w-full p-2 border rounded mb-4"
        value={postSearch} onChange={e => setPostSearch(e.target.value)} />

      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3">User</th>
            <th className="p-3">Post</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map(p => (
            <tr key={p._id}>
              <td className="p-3">{p.user?.name}</td>
              <td className="p-3">{p.text.slice(0,80)}...</td>
              <td className="p-3">
                <button
                  onClick={() => setConfirm({ open: true, type: "post", item: p })}
                  className="bg-red-100 text-red-600 px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* CONFIRM MODAL */}
      {confirm.open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded">
            <p className="mb-4 font-semibold">Confirm delete?</p>
            <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded">Yes</button>
            <button onClick={() => setConfirm({ open: false })} className="ml-3">Cancel</button>
          </div>
        </div>
      )}

      {/* UNDO SYSTEM WITH PROGRESS */}
      {undoItem && (
        <div className="fixed bottom-6 right-6 bg-black text-white px-6 py-4 rounded shadow-lg w-80">
          <p className="mb-2">
            Item deleted — <span className="font-bold">Undo ({undoSeconds}s)</span>
            <button onClick={undoDelete} className="ml-2 underline">Undo</button>
          </p>

          <div className="w-full bg-gray-600 h-2 rounded overflow-hidden">
            <div
              className="bg-green-400 h-full transition-all duration-1000"
              style={{ width: `${(undoSeconds / 20) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
