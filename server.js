const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

// Sadə test routu
app.get("/", (req, res) => {
  res.send("Server işləyir 🚀");
});

// Render üçün mütləq 0.0.0.0-da dinləməlisən
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server ${PORT} portunda işə düşdü`);
});

