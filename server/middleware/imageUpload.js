const multer = require("multer")

const imageConfig = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"./uploads")
    },
    filename:(req,file,cb)=>{
        cb(null,`image-${file.originalname}`)
    }
})



const isImage = (req,file,cb)=>{
    if (file.mimetype.startsWith("image")) {
        cb(null,true)
    }else{
        cb(new Error("only images is allowed"))
    }
}


const upload = multer({
   storage:imageConfig,
   fileFilter:isImage
})


module.exports = upload