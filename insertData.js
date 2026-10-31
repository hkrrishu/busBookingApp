
const db = require("./utils/db-connection");

const User = require("./models/users");
const Bus = require("./models/buses");

const insertData = async () => {
    try {
        await db.sync({ force: false });

        await User.create({
            name: "Rahul",
            email: "rahul@gmail.com"
        });

        await User.create({
            name: "Aman",
            email: "aman@gmail.com"
        });

        await User.create({
            name: "Priya",
            email: "priya@gmail.com"
        });

        await Bus.create({
            busNumber: "UP53AB1234",
            totalSeats: 40,
            availableSeats: 35
        });

        await Bus.create({
            busNumber: "UP53CD5678",
            totalSeats: 40,
            availableSeats: 8
        });

        console.log("Sample data inserted successfully");

    } catch (error) {
        console.log(error);
    }
};

insertData();
