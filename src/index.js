import React from 'react';
import ReactDOM from 'react-dom';

// import Lifecycle from './react-js-dasar/Lifecycle';
// import Map from './react-js-dasar/Map';
// import App from './react-js-dasar/App';
// import Header from './react-js-dasar/Header';
// import StateProps from './react-js-dasar/StateProps'

import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud';

ReactDOM.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>,
  document.getElementById('root')
);
