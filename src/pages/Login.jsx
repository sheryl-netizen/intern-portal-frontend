import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./pages/Auth.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // 👈 used for redirection

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("https://intern-portal-backend-2sel.onrender.com/api/login", form);
      setMessage("Login successful!");
      console.log(res.data);

      // 👇 Redirect to dashboard after login success
      navigate("/dashboard"); 
    } catch (err) {
      setMessage("Login failed. Please check your credentials.");
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        <p>{message}</p>
      </div>
    </div>
  );
}
