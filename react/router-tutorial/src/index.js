
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Button = styled.button`
  color: #fff;
  border: none;
  background-color: ${props => props.background || "brown"};
`;

const rootElement = document.getElementById('root');

// ========================================

ReactDOM.render(
  <div>
    <Button>normal button</Button>
    <Button background="purple">purple button</Button>
  </div>,
  rootElement
);

