import React from 'react';
import Main from './components/mainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Main />
    </Provider>
    );
  }
}