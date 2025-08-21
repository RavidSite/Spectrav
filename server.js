import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 4000;

// Public qovluğunu açıq edirik
app.use(express.static("public"));

// Əsas route index.html-i göstərir
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server işləyir: http://localhost:${PORT}`);
});

