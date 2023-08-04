'use strict';

const dataSet = [
  {
    id: 1,
    class: 'Basic Calculus',
    numOfStudents: '23',
  },
  {
    id: 2,
    class: 'Fundamentals of Computing',
    numOfStudents: '18',
  },
  {
    id: 3,
    class: 'Science 101',
    numOfStudents: '15',
  },
];


const totalStudents = 
  Number(dataSet[0].numOfStudents) +
  Number(dataSet[1].numOfStudents) +
  Number(dataSet[2].numOfStudents);

  console.log(`Total Students in School: ${totalStudents}`);