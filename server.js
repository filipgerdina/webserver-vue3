const express = require('express');
const compression = require('compression'); // <-- ADD THIS
const path = require('path');
const fs = require('fs');

const app = express();
const port = 8080;

const distPath = path.join(__dirname, './apps/shell/dist');

// Enable gzip compression for responses
app.use(compression()); // <-- ADD THIS

// Serve static files
app.use(express.static(distPath));

// Fallback for SPA
app.get('/*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('index.html not found - did you build the project?');
  }
});

app.listen(port, () => {
  console.log(`Shell app is running at http://localhost:${port}`);
});
