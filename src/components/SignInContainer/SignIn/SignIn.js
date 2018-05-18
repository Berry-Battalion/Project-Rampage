import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
    grid-area: ${props => props.area};
`;

const SignIn = ({area, username, password, onChangeUsername, onChangePassword, onSubmitSignIn}) => {
    return (
        <Form area={area} >
            <label>Username</label>
            <input type="text" value={username} onChange={onChangeUsername}/>
            <label>Password</label>
            <input type="password" value={password} onChange={onChangePassword} />
            <button type="submit" onClick={onSubmitSignIn}>Login</button>
        </Form>
    )
};


SignIn.propTypes = {
    area: PropTypes.string
};

export default SignIn;