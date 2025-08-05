import { useState } from "react";
import axios from "axios";
import "./Auth.css"; // ✅ Correct import

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("https://intern-portal-backend-2sel.onrender.com/api/signup", form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage("Signup failed. Try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Signup</h2>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <button onClick={handleSubmit}>Signup</button>
        <p>{message}</p>
      </div>
    </div>
  );
}
