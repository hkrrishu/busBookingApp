
const db = require("../utils/db-connection");
const Bus = require("../models/buses");
const { Op } = require("sequelize");

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

module.exports = {
    addEntries,
    getAvailableBuses
};
