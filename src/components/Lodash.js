import React from 'react';
import _ from 'lodash';

export const Lodash = () => {
  const max = _.max([10, 8, 25, 45, 2, 5, 8, 9]);
  console.log('max', max); // 45

  const sum = _.sum([10, 8, 25, 45, 2, 5, 8, 9]);
  console.log('sum', sum); //112

  const filter = _.filter([10, 8, 25, 45, 2, 5, 8, 9]);
  console.log(('filter', filter)); //[10, 8, 25, 45, 2, 5, 8, 9]

  const isEmpty = _.isEmpty([10, 8, 25, 45, 2, 5, 8, 9]);
  console.log(('isEmpty', isEmpty)); //false

  const students = [
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 80 },
  ];
  const uniqueGrades = _.uniqBy(students, (student) => student.grade);
  console.log('uniqueGrades', uniqueGrades); //[{ name: 'Alice', grade: 90 }, { name: 'Bob', grade: 80 }]

  const animals = [
    { name: 'Dog', type: 'Mammal' },
    { name: 'Cat', type: 'Mammal' },
    { name: 'Bird', type: 'Bird' },
    { name: 'Fish', type: 'Fish' },
  ];
  const groupedAnimals = _.groupBy(animals, (animal) => animal.type);
  console.log('groupedAnimal', groupedAnimals); // { Mammal: [ { name: 'Dog', type: 'Mammal' }, { name: 'Cat', type: 'Mammal' } ], Bird: [ { name: 'Bird', type: 'Bird' } ], Fish: [ { name: 'Fish', type: 'Fish' } ] }

  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = _.map(numbers, (n) => n * 2);
  console.log('doubledNumbers', doubledNumbers); // [2, 4, 6, 8, 10]

  const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
  const chunks = _.chunk(letters, 2);
  console.log('chunks', chunks); // [['a', 'b'], ['c', 'd'], ['e', 'f']]

  const isTrue = true;
  const isFalse = false;
  console.log(_.isBoolean(isTrue)); // true
  console.log(_.isBoolean(isFalse)); // true
  console.log(_.isBoolean('not a boolean')); // false
  return (
    <div>
      <h1>Lodash.js library function</h1>
      <h2 style={{ color: 'red', marginTop: '30px' }}>
        For lodash function open console
      </h2>
      {/* <h3>{max}</h3>
      <h3>{sum}</h3>
      <h3>{filter}</h3>
      <h3>{isEmpty}</h3>
      <h3>{uniqueGrades}</h3>
      <h3>{groupedAnimals}</h3>
      <h3>{doubledNumbers}</h3>
      <h3>{chunks}</h3> */}
    </div>
  );
};
