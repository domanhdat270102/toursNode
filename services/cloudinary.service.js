const cloudinary = require('./../config/cloudinary');

const storeToCloudinary = (buffer, folder, fileName) =>
  new Promise((resolve, reject) =>
    cloudinary.uploader
      .upload_stream(
        {
          folder,
          public_id: fileName,
          width: 2000,
          height: 1333,
          crop: 'fill'
        },
        (err, result) => {
          if (err) return reject(err);
          resolve(result);
        }
      )
      .end(buffer)
  );

module.exports = storeToCloudinary;
