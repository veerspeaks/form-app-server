const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController.cjs');
const cloudinary = require('../utils/cloudinaryConfig.cjs');
const upload = require('../utils/multer.cjs');

/**
 * Route to handle image uploads to Cloudinary
 * POST /api/forms/upload
 */
router.post('/upload', upload.single('image'), (req, res) => {
    // Get uploaded file path
    const { path } = req.file;
    
    // Create unique filename using timestamp
    const uniqueFilename = `${Date.now()}-${req.file.originalname}`;
    
    // Upload to Cloudinary with unique filename
    cloudinary.uploader.upload(path, { public_id: uniqueFilename }, (err, result) => {
        res.json({ url: result.secure_url });
    });
});

/**
 * Route to create a new form
 * POST /api/forms
 */
router.post('/', formController.createForm);

/**
 * Route to get a form by ID
 * GET /api/forms/:id
 */
router.get('/:id', formController.getForm);

/**
 * Route to submit responses to a form
 * POST /api/forms/:id/responses
 */
router.post('/:id/responses', formController.submitResponse);

module.exports = router;