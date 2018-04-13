import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
    grid-area ${props => props.area}
`;

const Welcome = props => {
    return (
        <Div area={props.area}>
            <div>Welcome!</div>
            <Link to="/signin">Sign In</Link>
        </Div>
    )
};

Welcome.propTypes = {
    area: PropTypes.string
}

export default Welcome;