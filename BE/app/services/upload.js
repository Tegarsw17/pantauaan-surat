const multer = require('multer');
const util = require('util');
const path = require('path');
const __basedir = path.resolve();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__basedir, '/storage/pdf'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('Only PDF files are allowed!'), false); 
    }
};

const uploadImage = multer({
    storage: storage,
    fileFilter: fileFilter,
}).single('file');

let uploadFile = util.promisify(uploadImage);

module.exports = {
    uploadFile,
    __basedir,
};
