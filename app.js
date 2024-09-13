const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const database = require("./config/db");
const router = require("./routes/index");

database.connect();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
