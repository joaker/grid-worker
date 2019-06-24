import React from 'react';
import Cell from './Cell';

export const Grid = ({count = 9, step = 5, start = 5}) => {
  const seeds = [];
  for(let i = 0; i < count; i++) {
    const val = i * step + start;
    seeds.push(val);
  }
  const cells = seeds.map((val, index) => <Cell value={val} key={val} />);
  return (
    <div className='grid'>
      {cells}
    </div>
  )
}

export default Grid;
