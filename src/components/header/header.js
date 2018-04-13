import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Nav = styled.nav`
    grid-area: ${props => props.area};
`;

const Header = (props) => {
    return (
        <Nav area={props.area}>
            Header
        </Nav>
    )
};

Nav.propTypes = {
    area: PropTypes.string
};

export default Header;