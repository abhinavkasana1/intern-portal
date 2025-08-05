import React, { useState, useEffect } from 'react';
import './App.css'; // Main dashboard styles

function App() {
  const [internData, setInternData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the backend API on component mount
  useEffect(() => {
    // Make sure your backend server is running at http://localhost:3001
    fetch('http://localhost:3001/api/intern-data')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setInternData(data);
        setIsLoading(false);
      })
      .catch(e => {
        setError(e.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="app-container"><p>Loading dashboard...</p></div>;
  }

  if (error) {
    return <div className="app-container"><p className="error">Error: {error}. Please check if the backend is running.</p></div>;
  }

  if (!internData) {
    return <div className="app-container"><p>No data available.</p></div>;
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1>Intern Dashboard</h1>
      </div>
      <div className="dashboard-content">
        <div className="card intern-info-card">
          <h2>Intern Information</h2>
          <p><strong>Name:</strong> {internData.internName}</p>
          <p><strong>Referral Code:</strong> {internData.referralCode}</p>
        </div>
        <div className="card donations-card">
          <h2>Donations Raised</h2>
          <p className="donations-number">${internData.donationsRaised}</p>
        </div>
        <div className="card rewards-card">
          <h2>Rewards & Unlockables</h2>
          <ul>
            {internData.rewards.map((reward, index) => (
              <li key={index}>{reward}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;