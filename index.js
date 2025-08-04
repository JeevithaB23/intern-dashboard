// Import required modules
const express = require("express");
const cors = require("cors");

// Initialize Express app
const app = express();
const PORT = 5000;

// Enable CORS for frontend access
app.use(cors());

// Dummy intern data
const interns = [
  {
    id: 1,
    name: "Jeevitha Raj",
    referralCode: "jeevitha2025",
    donationsRaised: 1500
  },
  {
    id: 2,
    name: "Shyam",
    referralCode: "shyam125",
    donationsRaised: 5000
  },
  {
    id: 3,
    name: "Ramu",
    referralCode: "ramu753",
    donationsRaised: 2300
  }
];

// Static rewards data
const rewards = [
  { title: "LinkedIn Shoutout", unlockedAt: 1000 },
  { title: "1-on-1 Mentorship Session", unlockedAt: 2000 },
  { title: "Exclusive Webinar", unlockedAt: 3000 }
];

// GET all interns
app.get("/users", (req, res) => {
  res.json(interns);
});

// GET single intern by ID (e.g., /user/1)
app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const intern = interns.find((i) => i.id === id);
  if (intern) {
    res.json(intern);
  } else {
    res.status(404).json({ message: "Intern not found" });
  }
});

// GET rewards
app.get("/rewards", (req, res) => {
  res.json(rewards);
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
