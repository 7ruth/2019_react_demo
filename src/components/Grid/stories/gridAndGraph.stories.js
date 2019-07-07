import React from 'react';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react';
// import { text, boolean, object } from '@storybook/addon-knobs';
// Components
import Graph from 'components/Graph';
import stories from './stories';
import Grid from '../Grid';

/**
 *  Default Grid
 */
function GridAndGraph() {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 4, h: 4, static: false },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    { i: 'j', x: 4, y: 0, w: 4, h: 2 }
  ];

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

  return (
    <Grid layout={layout}>
      <div key="a">
        <Graph data={data} height={300} width={400} />;
      </div>
      <div key="b">b</div>
      <div key="c">c</div>
      <div key="j">J</div>
    </Grid>
  );
}

stories.add('Grid with Graphs', GridAndGraph);

export default GridAndGraph;
