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
    { i: 'a', x: 0, y: 0, w: 4, h: 4, isResizable: false },
    { i: 'b', x: 0, y: 4, w: 4, h: 4, isResizable: false },
    { i: 'c', x: 0, y: 8, w: 4, h: 4, isResizable: false },
    { i: 'j', x: 0, y: 12, w: 4, h: 4, isResizable: false }
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
        <Graph data={data} height={200} width={300} />
      </div>
      <div key="b">
        <Graph data={data} height={200} width={300} />
      </div>
      <div key="c">
        <Graph data={data} height={200} width={300} />
      </div>
      <div key="j">
        <Graph data={data} height={200} width={300} />
      </div>
    </Grid>
  );
}

stories.add('Grid with Graphs', GridAndGraph);

export default GridAndGraph;
