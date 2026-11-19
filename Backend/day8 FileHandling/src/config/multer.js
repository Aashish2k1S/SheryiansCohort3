const multer = require('multer');

const storageForLocal = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        console.log(file);

        //size, format, ratio we can set, check the file as per our requirement here

        cb(null, Date.now() + '-' + file.originalname);
    }
});

// const upload = multer({ storage: storageForLocal });

const storageForMemory = multer.memoryStorage();
const upload = multer({ storage: storageForMemory });

module.exports = upload; 
