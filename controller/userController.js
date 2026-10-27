
const db = require("../utils/db-connection");

const addUser = (req, res) => {
    const { name, email } = req.body;

    const query = `insert into Users(name, email) values(?,?)`;

    db.execute(query, [name, email], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send(err.message);
            return;
        }

        console.log("user inserted successfully");
        res.status(200).send(`User with name ${name} added successfully`);
    });
};

const getUsers = (req, res) => {
    const query = `select * from Users`;

    db.execute(query, (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send(err.message);
            return;
        }

        res.status(200).json(result);
    });
};

module.exports = {
    addUser,
    getUsers
};
