const express = require("express");
const { createUser, getAllUser, getSingleUser, loginUser } = require("../controllers/userController");
const router = express.Router()


router.post("/api/v1/register", createUser)
router.get("/api/v1/get_user", getAllUser)
router.get("/api/v1/get_single_user/:id", getSingleUser)
router.post("/api/v1/login", loginUser)

module.exports = router;