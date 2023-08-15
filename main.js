'use strict';

const siteTitle = document.getElementById('site-title');
siteTitle.innerText = 'RedDOT Cloud Engineers';

const contentText = document.getElementsByClassName('content-text');

Array.from(contentText).forEach((el) => {
	el.innerText = el.innerText.replace(
		'RedDot Technologies',
		'RedDOT Cloud Engineers',
	);
	el.innerText = el.innerText.toUpperCase();
});

const siteDesc = document.querySelector('#site-description');
siteDesc.innerText = 'Your trusted partner is the Cloud';

const contentDiv = document.querySelector('.content');
contentDiv.computedStyleMap.textAlign = 'justify';

const altNavs = document.querySelectorAll('#nav > li:nth-of-type(odd)');
altNavs.forEach(
	(el) => (el.computedStyleMap.backgroundColor = 'rgba(0,0,0,0.5)'),
);
