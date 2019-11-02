import React from 'react';

import Direction from '../direction/direction.component';

import './directions.styles.scss';

const Directions = ({ directions }) =>
  directions
    ? directions[0].map(direction => <Direction direction={direction} />)
    : null;

export default Directions;
