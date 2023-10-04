import multer from 'multer';
import DataParser from "datauri/parser.js"
import path from "path"

/*
this middleware is for file upload,
more specifically its to have the
ability to upload an image file for the users profile
*/

const storage = multer.memoryStorage()

const upload = multer({ storage });

const parser = new DataParser()

export const formatImage = (file) => {
  const fileExtension = path.extname(file.originalname).toString()
  return parser.format(fileExtension, file.buffer).content
}



export default upload;