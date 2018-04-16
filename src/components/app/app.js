import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import protectedRoute from '../higherOrderComponents/protectedRoute';

import Header from '../header/header';
import Welcome from '../welcome/welcome';
import SignInContainer from '../SignInContainer/SignInContainer';
import Home from '../Home/Home';

import reducers from '../../reducers/index';

const createStoreWithMiddleware = applyMiddleware(

)(createStore);

const App = () => {
    return (
        <Provider store={createStoreWithMiddleware(reducers)} >
            <Router>
                <div className="inner-app">
                    <Header area="header" />
                    <Switch>
                        <Route exact path='/' render={() => <Welcome area="content"/>} />
                        <Route exact path='/signin' render={() => <SignInContainer />} />
                        <Route exact path='/home' component={protectedRoute(Home)} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
}

export default App;