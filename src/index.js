import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// Styles
import './index.css';

// Components
import App from './components/App';

// Reducers
import reducer, { DEFAULT_STATE } from './actions/reducers/index';

const store = createStore(reducer, DEFAULT_STATE);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
