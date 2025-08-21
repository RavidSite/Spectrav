const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

// Public qovluğunu statik fayllar üçün açırıq
app.use(express.static(path.join(__dirname, "public")));

// Ana səhifəni göstər
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Serveri işə sal
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server işləyir: http://localhost:${PORT}`);
});

