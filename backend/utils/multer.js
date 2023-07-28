import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/avatars")
    },
    filename: (req, file, cb) =>{
        cb(null, new Date().toISOString() + "-"+file.originalname)
    }
})

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png") {
            cb(null, true)
        }else{
            cb({"error": "Unsupported File"},
            false)
        }
    }
})

export default upload