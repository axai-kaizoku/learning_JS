import { Router } from 'express';
import getPosts from './get-posts';
import loginUser from './login-user';
import signUpUser from './signup-user';
import getPost from './get-post';
import storePost from './store-post';
import deletePost from './delete-post';
import catchAll from './catch-all';
import protectApi from '../../utils/protectApi';

const router = Router();

router.get('/posts', getPosts);
router
	.route('/post/:postId?')
	.get(getPost)
	.post(protectApi, storePost)
	.delete(protectApi, deletePost);
router.post('/login', loginUser);
router.post('/signup', signUpUser);
router.use(catchAll);

export default router;
