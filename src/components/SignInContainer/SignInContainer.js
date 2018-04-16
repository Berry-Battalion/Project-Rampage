import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as actions from '../../actions/index';

import SignIn from './SignIn/SignIn';

class SignInContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { credentials: { username: '', password: ''}};

        this.onSubmitSignIn = this.onSubmitSignIn.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    onChangeUsername(event) {
        this.setState({ credentials: { username: event.target.value, password: this.state.credentials.password}})
    }

    onChangePassword(event) {
        this.setState({ credentials: { username: this.state.credentials.username, password: event.target.value }})
    }

    onSubmitSignIn(event) {
        event.preventDefault();
        this.props.authenticateUser(this.state.credentials);
    }
    render() {

        if(this.props.authenticated) {
            return <Redirect to='/home'/>
        }

        return (
            <SignIn 
                area="content"
                username={this.state.credentials.username}
                password={this.state.credentials.password}
                onSubmitSignIn={this.onSubmitSignIn}
                onChangeUsername={this.onChangeUsername}
                onChangePassword={this.onChangePassword} 
            />
        )
    }
};

const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps, actions)(SignInContainer);