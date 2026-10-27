const express = require("express");
const busController = require("../controller/busController");
const router = express.Router();

router.get("/available/:seats", busController.getAvailableBuses);
router.post("/add", busController.addEntries);
router.put("/update/:id", busController.updateEntry);
router.delete("/delete/:id", busController.deleteEntry);

module.exports = router;
