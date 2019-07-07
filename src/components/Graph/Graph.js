import React from 'react';
import { XYPlot, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';

function Graph({ data, height, width }) {
  return (
    <div className="App">
      <XYPlot height={height} width={width}>
        <LineSeries data={data} />
      </XYPlot>
    </div>
  );
}

Graph.displayName = 'Graph';

export default Graph;
