const express = require('express');
const path = require('path');
const backend = require('./api/backend.js');

const app = express();

// Static frontend (matches Vercel behavior)
app.use(express.static(path.join(__dirname, 'public')));

// Serverless API (simulate Vercel)
app.get('/api/backend', (req, res) => backend(req, res));

app.listen(3000, () => {
  console.log("Local dev running:");
  console.log("Frontend 👉 http://localhost:3000");
  console.log("Backend  👉 http://localhost:3000/api/backend");
});
