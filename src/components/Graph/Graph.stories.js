import React from 'react';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react';
// import { text, boolean, object } from '@storybook/addon-knobs';

import Graph from './Graph';

const stories = storiesOf(`Components|${Graph.displayName}`, module);

/**
 *  Default Graph
 */
function DefaultGraph() {
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 }
  ];

  return <Graph data={data} height={300} width={400} />;
}

stories.add('default', DefaultGraph);

export default DefaultGraph;
