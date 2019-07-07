import React, { createContext } from "react";
import PropTypes from "prop-types";

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
//   const context = { checkbox, textStyle, toggle };
  return (
      <div> 3232 </div> 
    // <Wrap
    //   flexDirection={verticalOrientation}
    //   width={verticalOrientation ? width : "auto"}
    //   {...props}
    // >
    //   {textContent && (
    //     <ControlHeader labelFontSize={textFontSize}>
    //       {textContent}
    //     </ControlHeader>
    //   )}
    //   <ContentWrap
    //     flexDirection={verticalOrientation}
    //     contentFontSize={contentFontSize}
    //     iconSize={iconSize}
    //   >
    //     <GridContext.Provider value={context} children={children} />
    //   </ContentWrap>
    // </Wrap>
  );
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