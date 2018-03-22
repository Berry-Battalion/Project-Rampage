import React from 'react';
import Header from '../../src/components/header';
import renderer from 'react-test-renderer';

describe('<Header />', () => {
    test('renders correctly', () => {
        const tree = renderer.create(
            <Header />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
})