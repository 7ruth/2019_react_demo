import React, { createContext } from "react";
import PropTypes from "prop-types";
import GridLayout from 'react-grid-layout';

// Utils
// import { FONT_SIZE_BASE } from "style/styleVariables";

// Components
// import Wrap from "./components/Wrap";
// import ContentWrap from "./components/ContentWrap";
// import ControlHeader from "./components/ControlHeader";

export const GridContext = createContext();

export default function Grid({
//   checkbox,
//   children,
//   contentFontSize,
//   textContent,
//   textFontSize,
//   textStyle,
//   iconSize,
//   verticalOrientation,
//   theme,
//   toggle,
//   width,
  ...props
}) {
    const layout = [
        {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
        {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: 'c', x: 4, y: 0, w: 1, h: 2}
      ];
//   const context = { checkbox, textStyle, toggle };
return (
    <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
      <div key="a">a</div>
      <div key="b">b</div>
      <div key="c">c</div>
    </GridLayout>
  )
}

Grid.defaultProps = {
//   checkbox: false,
//   textFontSize: FONT_SIZE_BASE,
//   contentFontSize: FONT_SIZE_BASE,
//   theme: keen,
//   verticalOrientation: true,
//   toggle: false,
//   width: "100%"
};

Grid.propTypes = {
//   checkbox: PropTypes.bool,
//   children: PropTypes.node,
//   contentFontSize: PropTypes.string,
//   iconSize: PropTypes.string,
//   textContent: PropTypes.string,
//   textFontSize: PropTypes.string,
//   textStyle: PropTypes.object,
//   theme: PropTypes.object,
//   toggle: PropTypes.bool,
//   verticalOrientation: PropTypes.bool,
//   width: PropTypes.string
};

Grid.displayName = "Grid";