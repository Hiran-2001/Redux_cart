const express = require("express");
const { connectToMongo } = require("./config/conn");
const foodRoute  = require("./routes/foodRoutes");
const app = express()
const port = process.env.PORT || 4000;
require("dotenv").config()
connectToMongo()
app.use(express.json())
app.listen(port, console.log(`server started at ${port}`))


app.use('/',foodRoute)