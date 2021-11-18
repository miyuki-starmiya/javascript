import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Users from './components/Users';

function App() {
  return (
    <Provider store={store}>
      <Users/>
    </Provider>
  );
}

export default App;