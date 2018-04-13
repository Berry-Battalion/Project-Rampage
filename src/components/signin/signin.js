import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
    grid-area: ${props => props.area}
`;

const SignIn = props => {
    return (
        <Div area={props.area} >
            <label>Username</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <button type="submit" onClick={() => console.log('submitted')}>Login</button>
        </Div>
    )
};


SignIn.propTypes = {
    area: PropTypes.string
};

export default SignIn;