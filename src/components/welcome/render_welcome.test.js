import React from 'react';
import Welcome from './welcome';
import renderer from 'react-test-renderer';

describe('<Welcome />', () => {
    test('renders correctly', () => {
        const tree = renderer.create(
            <Welcome />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
})