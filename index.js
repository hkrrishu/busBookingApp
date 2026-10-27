const express = require("express");
const db = require("./utils/db-connection");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bus Booking App is running");
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
