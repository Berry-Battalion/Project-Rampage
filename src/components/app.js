import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './header';
import Welcome from './welcome';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Welcome} />
                    <Route path='*' render={() => <div>WRONG!</div>} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;