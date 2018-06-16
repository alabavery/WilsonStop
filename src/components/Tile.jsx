import React from 'react';

export const Tile = props => {
  return (
    <div className="tile">
      <span>{props.line}</span>
      <span>{props.departure}</span>
    </div>
  );
};