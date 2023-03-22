const multer = require('multer')
const util = require('util')
const path = require('path')
const __basedir = path.resolve()
const { cloudinary } = require('../../db/config/cloudinary')
const { CloudinaryStorage } = require("multer-storage-cloudinary")

const imageFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image')) {
        cb (null, true)
    }else {
        cb('please upload only images', false)
    }
}

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "BingleShop",
        format: async (req, file) => {
            "jpg", "png"
        }, // supports promises as well
        public_id: (req, file) => {
            console.log(
                new Date().toISOString().replace(/:/g, "-") + file.originalname
            )
            return (
                new Date().toISOString().replace(/:/g, "-") + file.originalname
            )
        }
    }
})

const uploadImage =  multer({
    storage: storage,
    fileFilter: imageFilter,
}).array('file',5) //untuk menentukan banyak image yg bisa diupload

let uploadFile = util.promisify(uploadImage)

const deleteImageCloudinary = async (payload) => {
    return cloudinary.uploader.destroy(payload)
}

module.exports = {
    uploadFile,
    __basedir,
    deleteImageCloudinary,
}