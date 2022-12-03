const express = require("express")
const { createFood, getFood } = require("../controllers/foodController")
const router = express.Router()


router.post("/food/add",createFood)
router.get("/food",getFood)

module.exports = router;