import React from 'react';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react';
// import { text, boolean, object } from '@storybook/addon-knobs';

import Grid from './Grid';

const stories = storiesOf(`Components|${Grid.displayName}`, module);

/**
 *  Default Grid
 */
function DefaultGrid() {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 }
  ];

  return <Grid layout={layout} />;
}

stories.add('default', DefaultGrid);

export default DefaultGrid;
