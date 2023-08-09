'use strict';

const scoreCards = [
  {
    id: 1,
    student: 'Joe M',
    scores: [54, 76, 65],
  },
  {
    id: 2,
    student: 'Jane K',
    scores: [68, 85, 74],
  },
  {
    id: 3,
    student: 'Chris P',
    scores: [55, 88, 80],
  },
];

const calculatePercentile = function (english, compSc, mathematics) {
  return (((english + compSc + mathematics) / 300) * 100).toPrecision(4);
};

for (let x of scoreCards) {
	let scoreArray = x.scores;
	console.log(`${x.student} has scored ${calculatePercentile(...scoreArray)}%`)
}