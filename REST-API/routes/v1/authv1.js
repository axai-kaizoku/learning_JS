const Router = require('express').Router;

const { loginUser } = require('../../controllers/v1/authv1');

const router = Router();

router.post('/', loginUser);

module.exports = router;
