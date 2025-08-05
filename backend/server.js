// Import the necessary modules
const express = require('express');
const cors = require('cors');

// Create an instance of the Express application
const app = express();
const port = 3001; // The port the server will run on

// Use the CORS middleware to allow requests from the frontend
app.use(cors());

// --- Main Intern Data Endpoint ---
// This endpoint provides the data for the intern dashboard
app.get('/api/intern-data', (req, res) => {
    // Static dummy data as required by the assignment
    const internData = {
        internName: 'Jane Smith',
        referralCode: 'janesmith2025',
        donationsRaised: 2350, // A static number from the "backend"
        rewards: [
            '100 Donations: Bronze Badge Unlocked',
            '500 Donations: Silver Badge Unlocked',
            '1000 Donations: Gold Badge Unlocked',
            '2000 Donations: Diamond Badge Unlocked'
        ]
    };
    // Send the JSON response
    res.json(internData);
});

// --- Bonus: Leaderboard Data Endpoint ---
// This endpoint provides dummy data for a leaderboard page
app.get('/api/leaderboard', (req, res) => {
    // Static dummy data for the leaderboard
    const leaderboardData = [
        { name: 'Alice', donations: 3100 },
        { name: 'Bob', donations: 2850 },
        { name: 'Charlie', donations: 2350 },
        { name: 'Diana', donations: 1900 },
        { name: 'Ethan', donations: 1542 }
    ];
    // Send the JSON response
    res.json(leaderboardData);
});

// --- Server Start ---
// Start the server and listen for incoming requests
app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});
