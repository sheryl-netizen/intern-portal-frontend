import { useEffect, useState } from "react";
import axios from "axios";
import "./Leaderboard.css";

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/leaderboard")
      .then((res) => setLeaders(res.data))
      .catch((err) => console.error("Failed to fetch leaderboard:", err));
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>🏆 Top Donors</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Intern</th>
            <th>Donations (₹)</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((user, index) => (
            <tr key={index}>
              <td>{index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : index + 1}</td>
              <td>{user.name}</td>
              <td>{user.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
