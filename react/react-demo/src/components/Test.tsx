import React, { useState } from 'react';
import { User } from '../types/Types';

export const Test = () => {
  const [cnt, setCnt] = useState(0);

  return (
    <>
      <button onClick={() => setCnt(cnt + 1)}>increment</button>
      <p>{cnt}</p>
    </>
  )
}



