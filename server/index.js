const express = require("express");
const { connectToMongo } = require("./config/conn");
const foodRoute  = require("./routes/foodRoutes");
const userRoute  = require("./routes/userRoutes");
const app = express()
const port = process.env.PORT || 4000;
const cookieParser = require("cookie-parser")
const cors =require("cors")
require("dotenv").config()



connectToMongo()
app.use(express.json())
app.listen(port, console.log(`server started at ${port}`))
// console.log(process.env.JWT_SECRET_KEY);

app.use(cors())
app.use(cookieParser())
app.use('/',foodRoute)
app.use('/', userRoute)