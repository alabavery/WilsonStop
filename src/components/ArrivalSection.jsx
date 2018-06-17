import React from 'react';
import { Tile } from './Tile';
import '../resources/css/style.css';

export const ArrivalSection = props => {
  const tiles = props.routes.map(
    route => <Tile line={route.line} departure={route.departure} key={route.key}/>
  );
  return (
    <div className="arrivalsection">
      <h3>Wilson</h3>
      {tiles}
      <Tile line="Purple Line" departure="9:30am"/>
    </div>
  );
};
