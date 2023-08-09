/** @format */

const isPalindrome = (word) => word.split('').reverse().join('') === word;

console.log(isPalindrome('civic') ? 'Is a palindrome' : 'Not a palindrome');
