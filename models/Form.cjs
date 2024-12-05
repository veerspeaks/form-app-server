const mongoose = require('mongoose');

/**
 * Schema for Categorize type questions
 * Allows users to match items to their respective categories
 */
const categorizeSchema = new mongoose.Schema({
  categories: { type: [String], default: [] },  // List of categories
  options: { type: [String], default: [] }      // Items to be categorized
});

/**
 * Schema for Cloze type questions
 * Fill in the blanks with provided options
 */
const clozeSchema = new mongoose.Schema({
  cloze: [{
    sentence: { type: String, default: '' },    // Sentence with blanks
    options: { type: [String], default: [] }    // Options to fill in blanks
  }]
});

/**
 * Schema for Comprehension type questions
 * Multiple choice questions based on a passage
 */
const comprehensionSchema = new mongoose.Schema({
  comprehension: { type: String, default: '' },           // Main passage
  comprehension_questions: { type: [String], default: [] }, // Questions
  comprehension_options: {                                // MCQ options for each question
    type: [[String]],
    default: [],
    set: function(v) {
      if (typeof v === 'string') return JSON.parse(v);
      return v;
    }
  }
});

/**
 * Main question schema that encompasses all question types
 */
const questionSchema = new mongoose.Schema({
  type: { 
    type: String, 
    required: true,
    enum: ['Categorize', 'Cloze', 'Comprehension']  // Restrict to valid types
  },
  prompt: { type: String, required: true },  // Question prompt/instruction
  image: { type: String },                   // Optional image URL
  categorize: categorizeSchema,              // Categorize question specific fields
  cloze: clozeSchema,                        // Cloze question specific fields
  comprehension: comprehensionSchema         // Comprehension question specific fields
});

/**
 * Main form schema containing form metadata and questions
 */
const formSchema = new mongoose.Schema({
  title: { type: String, required: true },   // Form title
  headerImage: { type: String },             // Optional header image URL
  questions: [questionSchema]                // Array of questions
});

module.exports = mongoose.model('Form', formSchema);