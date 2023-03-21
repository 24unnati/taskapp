import React from 'react';
import _ from 'lodash';

export const Lodash = () => {
  const max = _.max([10, 8, 25, 45, 2, 5, 8, 9]);
  const sum = _.sum([10, 8, 25, 45, 2, 5, 8, 9]);
  const filter = _.filter([10, 8, 25, 45, 2, 5, 8, 9]);
  const isEmpty = _.isEmpty([10, 8, 25, 45, 2, 5, 8, 9]);

  return (
    <div>
      <h1>Lodash </h1>
      <h3>{max}</h3>
      <h3>{sum}</h3>
      <h3>{filter}</h3>
      <h3>{isEmpty}</h3>
    </div>
  );
};
