const path = require("path");
const express = require("express");

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html')
app.use(express.static(DIST_DIR));

app.get("/", (req, res) => {
  res.sendFile(HTML_FILE);
});

const port = 3000;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
