import React from 'react';

export const Tile = props => {
  const className = props.line === 'Red Line' ? 'red' : 'purple';
  return (
    <h1 className={`tile ${className}`}>
      <span className='line'>{props.line}</span>
      <span className="departure">{props.departure}</span>
    </h1>
  );
};
