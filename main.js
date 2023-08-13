'use strict';

const createPost = function ({ title, content }) {
	const socialCard = document.createElement('div');
	socialCard.setAttribute('class', 'social-card');
	const icon = document.createElement('div');
	icon.setAttribute('class', 'post-icon');
	const postTitle = document.createElement('div');
	postTitle.setAttribute('class', 'post-title');
	const postUser = document.createElement('div', 'a');
	postUser.setAttribute('class', 'post-user');
	const postContent = document.createElement('div');
	postContent.setAttribute('class', 'post-content');

	socialCard.append(icon, postTitle, postContent, postUser);

	postTitle.innerText = title;
	postUser.innerText = 'Joe Mockery';
	postContent.innerText = content;

	document.body.prepend(socialCard);
};

createPost({
	title: 'Onepiece 1072',
	content: `Oh Man the episode was lit 🔥. But it didn't get up to my expectations. I thought the final fight between Luffy and Kaido would come to an end in this episode, but they are stretching it to another episode. I hope it should be the last fight episode...`,
});
