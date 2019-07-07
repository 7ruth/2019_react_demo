import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, object } from "@storybook/addon-knobs";

import Grid from "./Grid";

const stories = storiesOf(`Components|${Grid.displayName}`, module);

const defaultOnClick = e => {
  let parentNode = e.target.parentNode;
  while (parentNode && parentNode.nodeName !== "BUTTON") {
    parentNode = parentNode.parentNode;
  }
  alert(`Clicked: ${parentNode && parentNode.nodeName}`);
};

/**
 *  Default Grid
 */
function DefaultGrid() {
  const showText = boolean("Show Text", true);
  const showIcons = boolean("Show Icons", true);
  const showHotKeys = boolean("Show Hot Keys", true);
  return (
      <Grid>hi</Grid>
    // <Grid
    //   verticalOrientation={boolean("Vertical orientation", true)}
    //   width={text("Width", spacingScale(17))}
    //   textContent={text("Header text", "Joe Shmo")}
    //   textFontSize={text("Header text font size", FONT_SIZE_BASE)}
    //   contentFontSize={text("Content font size", FONT_SIZE_BASE)}
    //   iconSize={text("Icon size", spacingScale(3))}
    //   checkbox={boolean("Checkbox", true)}
    //   textStyle={object("Text Style", {})}
    //   toggle={boolean("Toggle", false)}
    // >
    //   <ControlButton
    //     key="0"
    //     glyphName={showIcons ? "IconSummary" : null}
    //     onClick={defaultOnClick}
    //     hotKey={showHotKeys ? "C" : null}
    //   >
    //     {showText ? "Create" : null}
    //   </ControlButton>
    //   <ControlButton
    //     key="1"
    //     glyphName={showIcons ? "IconChevronRightDouble" : null}
    //     onClick={defaultOnClick}
    //     hotKey={showHotKeys ? "S" : null}
    //   >
    //     {showText ? "Send" : null}
    //   </ControlButton>
    //   <ControlButton
    //     key="2"
    //     glyphName={showIcons ? "IconEye" : null}
    //     onClick={defaultOnClick}
    //     hotKey={showHotKeys ? "V" : null}
    //   >
    //     {showText ? "View" : null}
    //   </ControlButton>
    //   <ControlButton
    //     key="3"
    //     glyphName={showIcons ? "IconChevronLeftDouble" : null}
    //     onClick={defaultOnClick}
    //     hotKey={showHotKeys ? "B" : null}
    //   >
    //     {showText ? "Back" : null}
    //   </ControlButton>
    // </Grid>
  );
}

stories.add("default", DefaultGrid);

export default DefaultGrid;
