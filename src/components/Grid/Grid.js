import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import GridLayout from 'react-grid-layout';

export const GridContext = createContext();

export default function Grid({ layout }) {
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      <div key="a">a</div>
      <div key="b">b</div>
      <div key="c">c</div>
    </GridLayout>
  );
}

Grid.propTypes = {
  layout: PropTypes.arrayOf(
    PropTypes.shape({
      i: PropTypes.string.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      w: PropTypes.number.isRequired,
      h: PropTypes.number.isRequired,
      static: PropTypes.bool,
      minW: PropTypes.number,
      maxW: PropTypes.number
    })
  ).isRequired
};

Grid.displayName = 'Grid';
