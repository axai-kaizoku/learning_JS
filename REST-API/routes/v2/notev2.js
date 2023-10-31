const Router = require('express').Router;

const notesControllerv2 = require('../../controllers/v2/notesController');

const router = Router();

router.get('/', notesControllerv2.getNotes);

module.exports = router;
