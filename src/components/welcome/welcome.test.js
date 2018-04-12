import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Welcome from './welcome';

Enzyme.configure({ adapter: new Adapter()});

describe('<Welcome />', () => {
    test('shows text "Welcome!"', () => {
        const wrapper = shallow(<Welcome />);

        expect(wrapper.find('div').text()).toBe('Welcome!');
    })
})
