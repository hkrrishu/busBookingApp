
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Payment = sequelize.define('Payment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    amountPaid: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    paymentStatus: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Payment;
