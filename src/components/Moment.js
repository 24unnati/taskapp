import moment from 'moment';
import React from 'react';

export const Moment = () => {
  const mydate = moment().format('YYYY MMMM DD');
  console.log(mydate);
  return (
    <div>
      <h1>Moment</h1>
      <h2 style={{ color: 'blue' }}> {mydate}</h2>
    </div>
  );
};
