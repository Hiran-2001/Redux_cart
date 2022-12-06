const express = require("express")
const { createUser, getUser } = require("../controllers/userController")
const router = express.Router()


router.post('/addUser',createUser)
router.get('/getUser',getUser)

module.exports = router