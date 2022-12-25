const express = require("express");
const { createUser, getAllUser, getSingleUser, loginUser, updateUser, deleteUser, validateUser, logoutUser, uploadImage } = require("../controllers/userController");
const router = express.Router()
const authenticate = require("../middleware/auth");
const upload = require("../middleware/imageUpload");

router.post("/api/v1/register", createUser)
router.get("/api/v1/get_user", getAllUser)
router.get("/api/v1/get_single_user/:id", getSingleUser)
router.post("/api/v1/login", loginUser)
router.patch("/api/v1/update/user/:id", updateUser)
router.delete("/api/v1/delete/user/:id", deleteUser)
router.get("/api/v1/validate_user", authenticate, validateUser)
router.get("/api/v1/logout_user", authenticate, logoutUser)
router.patch("/api/v1/image_upload/:id",upload.single("photo"),uploadImage)

module.exports = router;