import { Router } from 'express';
import getPosts from './get-posts';
import loginUser from './login-user';
import signUpUser from './signup-user';
import getPost from './get-post';
import storePost from './store-post';
import deletePost from './delete-post';
import catchAll from './catch-all';
import protectApi from '../../utils/protectApi';
import verify from './verify';
import {
	servePostsFromCache,
	servePostFromCache,
} from '../../controllers/cache';

const router = Router();

router.get('/posts', servePostsFromCache(), getPosts);
router
	.route('/post/:postId?')
	.get(servePostFromCache(), getPost)
	.post(protectApi, storePost)
	.delete(protectApi, deletePost);
router.post('/login', loginUser);
router.post('/signup', signUpUser);
router.post('/verify', verify);
router.use(catchAll);

export default router;
