const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Halo, ini SIAKAD 🚀");
});

app.listen(4000, () => {
  console.log("SIAKAD API jalan di http://localhost:4000");
});
