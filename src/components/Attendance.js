import React from "react";
import { Link } from "react-router-dom";
import "./Attendance.css";

const Attendance = () => {
  return (
    <div className="attendance-container">
      <h2>Attendance</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Member</th>
            <th>Monthly</th>
            <th>Year</th>
            <th>Status</th>
            <th>Time-In</th>
            <th>Time-Out</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample data */}
          <tr>
            <td>Rafael Fernandez</td>
            <td>June 1</td>
            <td>2024</td>
            <td>Present</td>
            <td>11:00 AM</td>
            <td>12:00 PM</td>
          </tr>
          <tr>
            <td>Gela Fernandez</td>
            <td>June 2</td>
            <td>2024</td>
            <td>Present</td>
            <td>08:30 AM</td>
            <td>10:00 AM</td>
          </tr>
          <tr>
            <td>Aya Nocum</td>
            <td>June 2</td>
            <td>2024</td>
            <td>Present</td>
            <td>02:00 AM</td>
            <td>03:30 AM</td>
          </tr>
          <tr>
            <td>Fe Fernandez</td>
            <td>June 4</td>
            <td>2024</td>
            <td>Present</td>
            <td>09:30 AM</td>
            <td>11:30 AM</td>
          </tr>
          <tr>
            <td>Gabriel Fernandez</td>
            <td>June 5</td>
            <td>2024</td>
            <td>Present</td>
            <td>08:30 AM</td>
            <td>10:00 AM</td>
          </tr>
          <tr>
            <td>Miguel Fernandez</td>
            <td>June 5</td>
            <td>2024</td>
            <td>Present</td>
            <td>11:00 AM</td>
            <td>12:00 PM</td>
          </tr>
        </tbody>
      </table>
      <Link to="/">
        <button>Go back to Dashboard</button>
      </Link>
    </div>
  );
};

export default Attendance;
