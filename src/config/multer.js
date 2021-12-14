const { MulterError } = require('multer');
const multer = require('multer');
const { extname, resolve } = require('path');

const random = () => Math.floor(Math.random() * 10000 + 10000)

module.exports = {
  fileFilter: (req, file, cb) => {
    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg'){
      return cb(new MulterError('Arquivo precisa ser PNG ou JPG'))
    }
    return cb(null, true)
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'))
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`)
    }
  })
};