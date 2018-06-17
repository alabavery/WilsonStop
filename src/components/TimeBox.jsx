import React from 'react';
import '../resources/css/style.css';

export const TimeBox = () => {
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December',
  ];
  const d = new Date();
  const prettyHours = getPrettyHours(d.getHours());
  const hours = prettyHours.hour;
  const amPm = prettyHours.amPm;
  const minutes = getPrettyMinutes(d.getMinutes());
  const day = d.getDate();

  return (
    <span className="timebox">
      <h2>{hours}:{minutes}</h2>
      <h2 id="pm">{amPm}</h2>
      <h4 id="day">{weekdays[d.getDay()]}</h4>
      <h4 id="date">{months[d.getMonth()]} {day}</h4>
    </span>
  );
};

const getPrettyHours = militaryTime =>
  militaryTime > 12 ? { hour: militaryTime - 12, amPm:'pm' } : { hour: militaryTime, amPm:'am' };

const getPrettyMinutes = ugly => ugly.toString().length > 1 ? ugly : `0${ugly.toString()}`;
