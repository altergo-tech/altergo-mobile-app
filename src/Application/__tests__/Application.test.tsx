/**
 * @format
 */

import 'react-native';
import React from 'react';

import Application from '../index';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Application />);
});
