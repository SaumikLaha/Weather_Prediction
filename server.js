require("dotenv").config();        // Load .env
const express = require("express");
const cors = require("cors");        // npm install cors
const path = require("path");

// Node.js 16 version  fetch
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
const PORT = 3000;

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// Enable CORS
app.use(cors());

// Frontend route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Weather API endpoint
app.get("/weather", async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.WEATHER_API_KEY;

    if (!city) {
        return res.status(400).json({ error: "City name is required" });
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod !== 200) {
            return res.status(data.cod).json({ error: data.message });
        }

        res.json(data);
    } catch (error) {
        console.error("Server fetch error:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
