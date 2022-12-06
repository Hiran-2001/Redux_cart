const mongoose = require("mongoose")

exports.connectToMongo =()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("Connected to db sucessfully");
    }).catch((err)=>{
        console.log("Connection failed");
    })
}

