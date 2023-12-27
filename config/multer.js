const multer = require('multer');

const AppError = require('./../utils/appError');

const multerUpload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith('image')) cb(null, true);
    else cb(new AppError('One of the uploaded files was not an image'), false);
  }
});

module.exports = multerUpload;
