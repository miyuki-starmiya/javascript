
# block scope

we use block scope when we declare function components

```js
// function component is declared well with const and arrow func
const Header = () => {
  const username = 'hitoe'; // local variable
  return <header>Welcome back, {username}!</header>;
}
```

# arrow function

we use block scope when we declare function components as well as for higher-order array methods like .map() or .filter()

```js
const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <UserComponent key={index} {...user} />
      ))}
    </ul>
  );
}
```

# state





