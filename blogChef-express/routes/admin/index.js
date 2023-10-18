import { Router } from 'express';
import home from './home';
import login from './login';
import dashboard from './dashboard';
import protectRoute from '../../utils/protectRoute';
import logOut from './logout';
import moderate from './moderate-post';
import signUpAdmin from './signup-admin';
import {
	loginAdminValidation,
	signUpAdminValidation,
} from '../../utils/validation';

const router = Router();

router.get('/', home);
router
	.route('/login')
	.get((req, res) => res.render('login'))
	.post(loginAdminValidation, login);

router
	.route('/signup')
	.get((req, res) => res.render('signup'))
	.post(signUpAdminValidation, signUpAdmin);
router.get('/dashboard', protectRoute('/admin/login'), dashboard);
router.get('/logout', logOut);
router.post('/moderate', protectRoute('/admin/login'), moderate);

export default router;
