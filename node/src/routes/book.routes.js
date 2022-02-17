const express = require('express')
const router = express.Router()

const bookController = require('../controllers/book.controller');

// Retrieve all employees
router.get('/', bookController.findAll);

// Create a new employee
router.post('/', bookController.create);

// Retrieve a single employee with id
router.get('/:id', bookController.findById);

// Update a employee with id
router.put('/:id', bookController.update);

// Delete a employee with id
router.delete('/:id', bookController.delete);

module.exports = router