
const db = require("../utils/db-connection");
const User = require("../models/users");
const Booking = require("../models/bookings");
const Bus = require("../models/buses");

const addUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        const newUser = await User.create({
            name: name,
            email: email
        });

        res.status(201).send(`User with name ${name} added successfully`);

    } catch (error) {
        res.status(500).send("unable to make an entry");
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        res.status(200).json(users);

    } catch (error) {
        res.status(500).send("unable to fetch users");
    }
};

const getUserBookings = async (req, res) => {
    try {
        const { id } = req.params;

        const bookings = await Booking.findAll({
            where: {
                UserId: id
            },
            include: Bus
        });

        res.status(200).json(bookings);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addUser,
    getUsers,
    getUserBookings
};
