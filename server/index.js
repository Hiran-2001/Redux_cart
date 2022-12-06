const express = require("express");
const { connectToMongo } = require("./config/conn");
const foodRoute  = require("./routes/foodRoutes");
const userRoutes  = require("./routes/userRoutes");
const app = express()
const port = process.env.PORT || 4000;
const cors =require("cors")
require("dotenv").config()



connectToMongo()
app.use(express.json())
app.listen(port, console.log(`server started at ${port}`))


app.use(cors())
app.use('/',foodRoute)
app.use('/',userRoutes)