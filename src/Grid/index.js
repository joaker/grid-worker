import React, { useContext } from 'react';
import {Context} from '../context';
import Cell from './Cell';


export const Grid = () => {
  const {state } = useContext(Context);
  const { count, step, start } = state;
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
