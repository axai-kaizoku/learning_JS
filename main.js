/** @format */

'use strict';

const str =
	'If you have any information on the whereabouts of our cat, please email us at findKibbles@gmail.com and we would get in touch with you right away. You can also mail us at john@mockery.com. Thanks.';

	const getEmails = (str) => {
		const pattern = /[a-z0-9._]+@[a-z0-9-]+\.[a-z.]{2,6}/gi;
		const detect = str.match(pattern);
		return detect && detect.length > 1 ? detect : detect[0];
	};

	console.log(getEmails(str))