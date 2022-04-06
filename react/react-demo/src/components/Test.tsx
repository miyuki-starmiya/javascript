import React from 'react';

interface Human<T=string> {
  name: T,
}

export const Test = (props: Human) => {
  return (
    <div>
      <h3>this is a function component</h3>
      {props.name}
    </div>
  )
}

export class TestClass extends React.Component<Human> {
  render() {
    return (
      <div>
        <h3>this is a class component</h3>
        {this.props.name}
      </div>
    )
  }
}

