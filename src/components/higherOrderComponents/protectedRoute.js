import React, { Component } from 'react';
import { connect } from 'react-redux';

const protectedRoute = (ComposedComponent) => {
    class Authentication extends Component {
        constructor(props) {
            super(props);

        }

        componentWillMount() {
            if(!this.props.authenticated) {
                this.props.history.push('/')
            }
        }

        componentWillUpdate(nextProps) {
            if(!nextProps.authenticated) {
                this.props.history.push('/')
            }
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    const mapStateToProps = state => {
        return {
            authenticated: state.auth.authenticated
        }
    }
    return connect(mapStateToProps)(Authentication);
}

export default protectedRoute;