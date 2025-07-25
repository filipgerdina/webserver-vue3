const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from "dist" directory
app.use(express.static(path.join(__dirname, 'dist')));

// For SPA (optional): serve index.html for all unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
