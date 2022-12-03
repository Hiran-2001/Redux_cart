const mongoose = require("mongoose")

exports.connectToMongo =()=>{
    mongoose.connect("mongodb://localhost:27017/Foodie").then(()=>{
        console.log("Connected to db sucessfully");
    }).catch((err)=>{
        console.log("Connection failed");
    })
}

