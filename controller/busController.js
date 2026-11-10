
const db = require("../utils/db-connection");
const Bus = require("../models/buses");
const { Op } = require("sequelize");
const Booking = require("../models/bookings");
const User = require("../models/users");

const addEntries = async (req, res) => {
    try {
        const { busNumber, totalSeats, availableSeats } = req.body;

        const newBus = await Bus.create({
            busNumber: busNumber,
            totalSeats: totalSeats,
            availableSeats: availableSeats
        });

        res.status(201).send(`Bus ${busNumber} added successfully`);

    } catch (error) {
        res.status(500).send("unable to make an entry");
    }
};

const getAvailableBuses = async (req, res) => {
    try {
        const { seats } = req.params;

        const buses = await Bus.findAll({
            where: {
                availableSeats: {
                    [Op.gt]: seats
                }
            }
        });

        res.status(200).json(buses);

    } catch (error) {
        res.status(500).send("unable to fetch buses");
    }
};

const getBusBookings = async (req, res) => {
    try {
        const { id } = req.params;

        const bookings = await Booking.findAll({
            where: {
                BusId: id
            },
            include: User
        });

        res.status(200).json(bookings);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addEntries,
    getAvailableBuses,
    getBusBookings
};
