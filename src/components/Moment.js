import moment from 'moment';
import React from 'react';

export const Moment = () => {
  const isoDate = '2023-03-21T12:00:00Z';
  const unixTimestamp = moment(isoDate).unix();
  // console.log(unixTimestamp); // Output: 1671648000

  const newUnixTimestamp = 1671648000;
  const formattedDate = moment.unix(newUnixTimestamp).format('MMMM Do, YYYY');
  // console.log(formattedDate); // Output: March 21st, 2023

  const originalDate = '03/21/2023';
  const newFormat = 'DD-MMM-YYYY';
  const convertedDate = moment(originalDate, 'MM/DD/YYYY').format(newFormat);
  // console.log(convertedDate); // Output: 21-Mar-2023

  const date1 = moment('2023-03-21');
  const date2 = moment('2023-04-01');
  const diffInDays = date2.diff(date1, 'days');
  // console.log(diffInDays); // Output: 11

  const newOriginalDate = '2023-03-21';
  const daysToAdd = 7;
  const newDate = moment(newOriginalDate)
    .add(daysToAdd, 'days')
    .format('MMMM Do, YYYY');
  // console.log(newDate); // Output: March 28th, 2023

  return (
    <div>
      <h1 style={{ marginTop: '100px' }}>Moment.js library functions</h1>
      <h2 style={{ color: 'blue' }}>{unixTimestamp}</h2>
      <h2 style={{ color: 'blue' }}>{formattedDate}</h2>
      <h2 style={{ color: 'blue' }}>{convertedDate}</h2>
      <h2 style={{ color: 'blue' }}>{diffInDays}</h2>
      <h2 style={{ color: 'blue' }}>{newDate}</h2>
    </div>
  );
};
