const db = require("../utils/db-connection");

const addEntries = (req, res) => {
  const { busNumber, totalSeats, availableSeats } = req.body;

  const query = `insert into buses(busNumber, totalSeats, availableSeats) values(?,?,?)`;

  db.execute(query, [busNumber, totalSeats, availableSeats], (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).send(err.message);
      return;
    }

    console.log("values inserted successfully");
    res.status(200).send(`Bus ${busNumber} added successfully`);
  });
};

const updateEntry = (req, res) => {
  const { id } = req.params;
  const { busNumber, totalSeats, availableSeats } = req.body;

  const updateQuery = `update buses set busNumber=?, totalSeats=?, availableSeats=? where id=?`;

  db.execute(
    updateQuery,
    [busNumber, totalSeats, availableSeats, id],
    (err, result) => {
      if (err) {
        console.error(err.message);
        res.status(500).send(err.message);
        return;
      }

      if (result.affectedRows === 0) {
        res.status(404).send(`Bus with id ${id} not found`);
        return;
      }

      res.status(200).send(`Bus with id ${id} updated successfully`);
    },
  );
};

const deleteEntry = (req, res) => {
  const { id } = req.params;

  const deleteQuery = `delete from buses where id=?`;

  db.execute(deleteQuery, [id], (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(500).send(err.message);
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).send(`Bus with id ${id} not found`);
      return;
    }

    res.status(200).send(`Bus with id ${id} deleted successfully`);
  });
};

const getAvailableBuses = (req, res) => {
  const { seats } = req.params;

  const query = `select * from Buses where availableSeats > ?`;

  db.execute(query, [seats], (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(500).send(err.message);
      return;
    }

    res.status(200).json(result);
  });
};

module.exports = {
  addEntries,
  updateEntry,
  deleteEntry,
  getAvailableBuses,
};
