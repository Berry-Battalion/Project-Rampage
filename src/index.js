import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/app';

ReactDOM.render(
    <App />,
    document.querySelector('.app')
);