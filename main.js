/** @format */

const users = `id,first_name,last_name,email,gender
1,Naruto,Uzumaki,naruto@jp.com,Male
2,Luffy,D,monkeydluffy@jp.tk.co,Male
3,Nami,Cat,catbulgluernami@onepiece.com,Female
4,Ichigo,Kurosaki,ichigok@bleach.co,Male
5,Light,Yagami,lightyagami@deathnote.jp.com,Male`;

const csvToArray = (csv) => {
	let output = [];
	for (const row of csv.split('\n')) {
		output.push(row.split(','));
	}
	return output;
};

console.table(csvToArray(users));
