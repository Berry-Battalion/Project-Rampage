import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('<Header />', () => {
    test('shows text "Header"', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.length).toEqual(1);
    })
})
