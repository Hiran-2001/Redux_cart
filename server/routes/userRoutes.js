const express = require("express");
const { createUser, getAllUser, getSingleUser } = require("../controllers/userController");
const router = express.Router()


router.post("/register", createUser)
router.get("/get_user", getAllUser)
router.get("/get_single_user/:id", getSingleUser)

module.exports = router;