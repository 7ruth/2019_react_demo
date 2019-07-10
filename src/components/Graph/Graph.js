import React from 'react';
import { XYPlot, LineSeries, XAxis, YAxis } from 'react-vis';
import 'react-vis/dist/style.css';

function Graph({ data, height, width, ...props }) {
  return (
    <div className="App">
      <XYPlot height={height} width={width}>
        <XAxis
          attr="x"
          attrAxis="y"
          orientation="bottom"
          position="end"
          style={{
            fontSize: '7px'
          }}
          tickFormat={d => {
            return new Date(parseInt(d, 10) * 1000)
              .toISOString()
              .slice(0, 19)
              .replace('T', ' ')
              .split(' ')[0];
          }}
        />
        <YAxis
          style={{
            fontSize: '7px'
          }}
          attr="y"
          attrAxis="x"
          orientation="left"
          position="end"
        />
        <LineSeries data={data} {...props} />
      </XYPlot>
    </div>
  );
}

Graph.displayName = 'Graph';

export default Graph;
