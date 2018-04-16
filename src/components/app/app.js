import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header/header';
import Welcome from '../welcome/welcome';
import SignInContainer from '../SignInContainer/SignInContainer';

const App = () => {
    return (
        <Router>
            <div className="inner-app">
                <Header area="header" />
                <Switch>
                    <Route exact path='/' render={() => <Welcome area="content"/>} />
                    <Route exact path='/signin' render={() => <SignInContainer />} />
                    <Route path='*' render={() => <div>WRONG!</div>} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;