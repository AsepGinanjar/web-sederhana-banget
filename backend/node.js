const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

// Middleware CORS
app.use(cors());

// Endpoint API
app.get("/api/data", (req, res) => {
  res.json({ message: "Halo Asep!" });
});

// Menjalankan server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server backend berjalan di http://localhost:${port}`);
});
