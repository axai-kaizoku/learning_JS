const Router = require('express').Router;
const validator = require('express-validator');

const { body } = validator;

const notesControllerv1 = require('../../controllers/v1/notesController');
const authV1 = require('../../controllers/v1/authv1');

const router = Router();

router.get('/', authV1.authenticateJwt, notesControllerv1.getNotes);

router.post(
	'/',
	authV1.authenticateJwt,
	body('title').exists(),
	body('isDraft').isBoolean(),
	notesControllerv1.addNote,
);

router.get('/:id', authV1.authenticateJwt, notesControllerv1.getNote);

router.delete('/:id', authV1.authenticateJwt, notesControllerv1.deleteNote);

router.patch('/:id', authV1.authenticateJwt, notesControllerv1.updateNote);

module.exports = router;
