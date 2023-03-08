import multer from 'multer'

const currentPath = process.cwd()
const filePath = `${currentPath}/src/uploads`
const MIMETYPES = ['image/png', 'image/jpg', 'image/jpeg']

const multerUpload = multer({
  storage: multer.diskStorage({
    destination: `${filePath}../../../uploads`,
    filename: (req, file, cb) => {
      const fileExtension = file.originalname.split('.').pop()
      const fileName = file.originalname.split('.').shift()

      cb(null, `${fileName}-${Date.now()}.${fileExtension}`)
    }
  }),
  fileFilter: (req, file, cb) => {
    if (MIMETYPES.includes(file.mimetype)) cb(null, true)
    else cb(new Error(`Only ${MIMETYPES.join(', ')} are allowed)`))
  },
  limits: {
    // file size limit
    fileSize: 10000000
  }
})

export { multerUpload, filePath }
