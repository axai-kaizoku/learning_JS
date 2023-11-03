const puppeteer = require('puppeteer');

async function screenShot() {
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 1000,
	});
	const page = await browser.newPage();
	await page.setViewport({
		width: 1000,
		height: 1000,
		deviceScaleFactor: 2,
	});
	await page.goto('https://instagram.com/akshay_yelle');

	const dimensions = await page.evaluate(() => {
		return {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight,
			deviceScaleFactor: window.devicePixelRatio,
		};
	});

	console.log('Dimensions: ', dimensions);

	await browser.close();
}

screenShot();
