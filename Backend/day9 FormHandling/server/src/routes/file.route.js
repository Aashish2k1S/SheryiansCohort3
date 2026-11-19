const express = require('express');
const upload = require('../config/multer');
const { fileUpload } = require('../controllers/file.controller');

const router = express.Router();

router.post('/', upload.single('file'), fileUpload);

module.exports = router;