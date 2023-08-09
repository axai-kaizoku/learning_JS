/** @format */

const users = `id,first_name,last_name,email,gender
1,Naruto,Uzumaki,naruto@jp.com,Male
2,Luffy,D,monkeydluffy@jp.tk.co,Male
3,Nami,Cat,catbulgluernami@onepiece.com,Female
4,Ichigo,Kurosaki,ichigok@bleach.co,Male
5,Light,Yagami,lightyagami@deathnote.jp.com,Male`;

const csvToArray = (csv) => {
	let output = [];
	csv.split('\n').forEach((row) => output.push(row.split(',')));
	return output;
};

// console.log(csvToArray(users));


const covertToObj = (arr) => {
	let output = [];
	arr.forEach((elem, index) => {
		// Skip index 0
		if (index !== 0) {
			let obj = {};
			elem.forEach((elem, index) => {
				obj[arr[0][index]] = elem;
			});
			output.push(obj);
		}
	});

	return output;
};

let csvToObj = covertToObj(csvToArray(users));
console.log(csvToObj);
