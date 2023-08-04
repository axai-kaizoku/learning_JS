'use strict';


'use strict';

let grade;
let percentage = 71;



if (percentage <= 100 && percentage >= 91) {
    grade = 'A+';
} else if (percentage <= 90 && percentage >= 81) {
    grade = 'B+';
} else if (percentage <= 80 && percentage >= 71) {
    grade = 'C+';
} else if (percentage <= 70 && percentage >= 61) {
    grade = 'D+';
} else {
    grade = 'Fail';
}

console.log(`The student has secured ${grade}`);
