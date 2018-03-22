import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../src/components/header';

Enzyme.configure({ adapter: new Adapter()});

describe('<Header />', () => {
    test('shows text "Header"', () => {
        const wrapper = shallow(<Header />);

        expect(wrapper.find('div').text()).toBe('Header');
    })
})
