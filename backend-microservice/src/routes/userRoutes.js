const express = require("express");
const { getTopUsers } = require("../controllers/userController");

const router = express.Router();

router.get("/users", getTopUsers);

module.exports = router;
