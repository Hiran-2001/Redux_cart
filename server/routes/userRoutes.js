const express = require("express");
const { createUser, getAllUser, getSingleUser, loginUser, updateUser, deleteUser } = require("../controllers/userController");
const router = express.Router()


router.post("/api/v1/register", createUser)
router.get("/api/v1/get_user", getAllUser)
router.get("/api/v1/get_single_user/:id", getSingleUser)
router.post("/api/v1/login", loginUser)
router.patch("/api/v1/update/user/:id", updateUser)
router.delete("/api/v1/delete/user/:id", deleteUser)

module.exports = router;