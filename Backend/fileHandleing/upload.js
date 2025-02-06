const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.resolve(__dirname, "../userImages");
        console.log("Attempting to Save File To:", uploadPath);
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const ext = path.extname(file.originalname);
        const fileName = `user-${uniqueSuffix}${ext}`;
        console.log("Generated File Name:", fileName);
        cb(null, fileName);
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
