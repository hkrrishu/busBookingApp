const express = require("express");
const db = require("./utils/db-connection");

const User = require("./models/users");
const Bus = require("./models/buses");
const Booking = require("./models/bookings");
const Payment = require("./models/payments");

const usersRoutes = require("./routes/usersRoutes");
const busRoutes = require("./routes/busRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

//models
require("./models");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bus Booking App is running");
});

app.use("/users", usersRoutes);
app.use("/buses", busRoutes);
app.use("/bookings", bookingRoutes);

db.sync({ alter: true }).then(() => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch((err) => {
    console.error("Error syncing database:", err);
});

