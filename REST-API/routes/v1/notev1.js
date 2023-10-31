const Router = require('express').Router;
const validator = require('express-validator');

const { body } = validator;

const notesControllerv1 = require('../../controllers/v1/notesController');

const router = Router();

router.get('/', notesControllerv1.getNotes);

router.post(
	'/',
	body('title').exists(),
	body('isDraft').isBoolean(),
	notesControllerv1.addNote,
);

router.get('/:id', notesControllerv1.getNote);

router.delete('/:id', notesControllerv1.deleteNote);

router.patch('/:id', notesControllerv1.updateNote);

module.exports = router;
