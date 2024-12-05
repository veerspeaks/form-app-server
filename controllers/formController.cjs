const Form = require('../models/Form.cjs');
const Response = require('../models/Response.cjs');

/**
 * Create a new form
 * @param {Object} req - Request object containing form data
 * @param {Object} res - Response object
 * @returns {Object} JSON response with created form ID or error
 */
exports.createForm = async (req, res) => {
  try {
    // Log received data for debugging
    console.log("Received form data:", req.body);
    
    // Create new form instance and save to database
    const form = new Form(req.body);
    const savedForm = await form.save();
    
    // Log saved form for debugging
    console.log("Saved form:", savedForm);
    
    // Return success response with form ID
    res.status(201).json({ id: savedForm._id });
  } catch (error) {
    // Log and return detailed error information
    console.error("Error saving form:", error);
    res.status(400).json({ 
      error: error.message,
      details: error.errors
    });
  }
};

/**
 * Get form by ID
 * @param {Object} req - Request object containing form ID in params
 * @param {Object} res - Response object
 * @returns {Object} JSON response with form data or error
 */
exports.getForm = async (req, res) => {
  try {
    // Find form by ID
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ error: 'Form not found' });
    
    // Return form data
    res.json(form);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Submit response to a form
 * @param {Object} req - Request object containing form ID and answers
 * @param {Object} res - Response object
 * @returns {Object} JSON response with success message or error
 */
exports.submitResponse = async (req, res) => {
  try {
    // Create new response instance
    const response = new Response({
      formId: req.params.id,
      answers: req.body.answers,
    });
    
    // Save response to database
    await response.save();
    
    // Return success message
    res.status(201).json({ message: 'Response submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};