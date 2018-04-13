import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header/header';
import Welcome from '../welcome/welcome';
import SignIn from '../signin/signin';

const App = () => {
    return (
        <Router>
            <div className="inner-app">
                <Header area="header" />
                <Switch>
                    <Route exact path='/' render={() => <Welcome area="content"/>} />
                    <Route exact path='/signin' render={() => <SignIn area="content" />} />
                    <Route path='*' render={() => <div>WRONG!</div>} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;