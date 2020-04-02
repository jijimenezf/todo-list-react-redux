import React from 'react';
import { Provider } from 'react-redux';
// Import the store
import store from './store'
import TodoContainer from './TodoContainer';

export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <TodoContainer />
    </Provider>
  );
};
