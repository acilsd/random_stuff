import React from 'react';
import { NavLink } from '../Links';

const Examples = () => {
  return (
    <div>
      <h1 class='text-center'>Some shitty examples cuz i was bored</h1>
      <ol>
        <li>
          <NavLink to='/?location=Yakutsk'>Yakutsk</NavLink>
        </li>
        <li>
          <NavLink to='/?location=Magadan'>Magadan</NavLink>
        </li>
      </ol>
    </div>
  );
};

export default  Examples;
