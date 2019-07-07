import React from 'react';
import PropTypes from 'prop-types';
import GridLayout from 'react-grid-layout';

export default function Grid({ children, layout }) {
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      {children}
    </GridLayout>
  );
}

Grid.propTypes = {
  // children: PropTypes.array,
  layout: PropTypes.arrayOf(
    PropTypes.shape({
      i: PropTypes.string.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      w: PropTypes.number.isRequired,
      h: PropTypes.number.isRequired,
      static: PropTypes.bool,
      minW: PropTypes.number,
      maxW: PropTypes.number,
      isResizable: PropTypes.bool
    })
  ).isRequired
};

Grid.displayName = 'Grid';
