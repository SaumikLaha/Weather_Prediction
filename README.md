# 🌦️ Weather Report App

A simple weather application built using HTML, CSS, and JavaScript. It fetches real-time weather data using the OpenWeatherMap API.

---

## 🚀 Live Demo

👉 [Click here to view the app on Netlify](https://weather-report-saumiklaha.netlify.app/)

> This version was deployed before backend integration. It runs entirely on client-side JavaScript.

---

## 🛠️ Project Structure

index.html # Main UI layout
├── style.css # Styling and responsiveness
├── script.js # Fetches weather data (frontend logic)
├── server.js # Node.js backend (added later, not deployed)
├── package.json # Node.js dependencies
└── .env # Stores API key securely (excluded from GitHub)


---

## ✨ Features  
- 🌍 Get **real-time weather data** for any city    
- 🔑 Secure API key handling with `.env` (backend version)  
- 🖥️ Two versions:  
  - **Frontend-only** (deployed on Netlify)  
  - **Fullstack (Node.js backend)** for local use  

---


## 🛠️ Tech Stack   

| Category     | Technologies |
|--------------|--------------|
| **Frontend** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |
| **Backend**  | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) |
| **Deployment** | ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white) |
| **API Service** | 🌐 [OpenWeatherMap API](https://openweathermap.org/api) |
| **Tools** | ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![dotenv](https://img.shields.io/badge/dotenv-000000?style=for-the-badge&logo=dotenv&logoColor=white) |

---

## 📦 Deployment Info  
- ✅ **Frontend-only version** → Deployed on **Netlify**  
- 🖥️ **Backend with Node.js** → Available locally (not deployed online)  

---

## 📸 Project Preview  

| 🏠 Home Page | 🌤️ Weather Result | 📊 Forecast Preview | ⚠️ Error (Invalid City) |
|--------------|-------------------|---------------------|-------------------------|
| ![Home](./screenshot/home.png) | ![Weather Result](./screenshot/preview1.png) | ![Forecast](./screenshot/preview2.png) | ![Error](./screenshot/Error.city.png) |

---


## 🧪 How to Run Locally  

## 1️⃣ Clone the Repository  
```bash
git clone https://github.com/SaumikLaha/Weather_Prediction.git
cd Weather_Prediction
---

2️⃣ Install Dependencies
npm install

3️⃣ Setup Environment Variables
WEATHER_API_KEY=your_api_key_here

4️⃣ Run the Server
node server.js
Server will start at: 👉 http://localhost:3000/

---
