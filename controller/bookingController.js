const Booking = require("../models/bookings");

const addBooking = async (req, res) => {
    try {
        const { userId, busId, seatNumber } = req.body;

        const newBooking = await Booking.create({
            userId: userId,
            busId: busId,
            seatNumber: seatNumber
        });

        res.status(201).json(newBooking);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addBooking
};