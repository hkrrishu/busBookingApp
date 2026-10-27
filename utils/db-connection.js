const mysql = require("mysql2");


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rishu@123",
  database: "busBookingApp",
});

connection.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Connected to the MySQL database");

  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS Users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255)
    )
  `;
  const createBusesTable = `
    CREATE TABLE IF NOT EXISTS Buses (
      id INT AUTO_INCREMENT PRIMARY KEY,
      busNumber VARCHAR(50),
      totalSeats INT,
      availableSeats INT
    )
  `;
  const createBookingsTable = `
    CREATE TABLE IF NOT EXISTS Bookings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      seatNumber INT
    )
  `;
  const createPaymentsTable = `
    CREATE TABLE IF NOT EXISTS Payments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      amountPaid DECIMAL(10, 2),
      paymentStatus VARCHAR(50)
    )
  `;

  connection.execute(createUsersTable, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Users table created or already exists");
  });

  connection.execute(createBusesTable, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Buses table created or already exists");
  });

  connection.execute(createBookingsTable, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Bookings table created or already exists");
  });

  connection.execute(createPaymentsTable, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Payments table created or already exists");
  });
});

module.exports = connection;