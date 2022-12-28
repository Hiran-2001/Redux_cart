const multer = require("multer");

const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`imgae-${Date.now()}. ${file.originalname}`)
    }
})


// img filter
const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new Error("only images is allowd"))
    }
}

const upload = multer({
    storage:imgconfig,
    fileFilter:isImage
});


module.exports = upload;