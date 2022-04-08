import React, { useState } from 'react';
import { User } from '../types/Types';

export const Test = () => {
  const [user, setUser] = useState<User | null>(null);
  const fetchUser = () => {
    return setUser({
      name: 'hitoe',
      age: 12,
    });
  }

  return (
    <>
      <button onClick={fetchUser}>fetch user</button>
      {user && <p>name is {user.name}</p>}
    </>
  )
}

function Foo<T>(e) {
  return e
};

const foo = Foo<string>('s');

