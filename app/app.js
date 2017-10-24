import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider, connect } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from './reducers';

import Main from './components/main/main';

const appDiv = document.getElementById('app');

// let store = createStore(reducers);

ReactDOM.render(<Main />, appDiv);

