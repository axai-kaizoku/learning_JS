// Selectors

const siteTitle = document.getElementById('site-title');
const navEls = document.getElementsByTagName('li');
const contentText = document.getElementsByClassName('content-text');
const siteDesc = document.querySelector('#site-description');
const contentDiv = document.querySelector('.content');
const allNavs = document.querySelectorAll('#nav > li:nth-of-type(even)');

// Manipulation
siteTitle.innerText = 'Dynamtion SpaceTech';

Array.from(navEls).forEach((el) => (el.innerText = `--${el.innerText}--`));

Array.from(contentText).forEach(
	(el) => (el.innerText = el.innerHTML.toUpperCase()),
);

siteDesc.innerText = siteDesc.innerText.replace(
	'DynTech LLC',
	'Dynamation SpaceTech',
);

contentDiv.style.backgroundColor = '#add8e6';
contentDiv.style.textAlign = 'justify';

allNavs.forEach((el) => (el.style.backgroundColor = 'rgba(0,0,0,0.5'));
