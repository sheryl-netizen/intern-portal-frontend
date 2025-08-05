import { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("https://intern-portal-backend-2sel.onrender.com/api/user")
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Failed to fetch user data:", err));
  }, []);

  if (!user) return <p>Loading user data...</p>;

  return (
    <div className="dashboard-container">
      <h2>🎉 Welcome, {user.name}</h2>

      <div className="card">
        <p><strong>Referral Code:</strong> {user.referralCode}</p>
        <p><strong>Total Donations:</strong> ₹{user.totalDonations}</p>
      </div>

      <div className="card">
        <h3>🎁 Rewards</h3>
        <ul className="rewards">
          <li>🥉 Bronze Badge – ₹1000</li>
          <li>🥈 Silver Badge – ₹5000</li>
          <li>🥇 Gold Badge – ₹10000</li>
        </ul>
      </div>
    </div>
  );
}
