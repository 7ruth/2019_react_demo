import styled from "styled-components";
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

export const StoryContainer = styled.div`
  background-color: ${props => props.theme.COLOR_BACKGROUND_A};
  color: ${props => props.theme.COLOR_CONTENT};
  width: 100%;
  display: flex;
  flex: 1 1 100%;
  align-items: stretch;
  justify-content: stretch;
  box-sizing: border-box;
  > div {
    padding: 0 16px;
    width: 100%;
    box-sizing: border-box;
    > div {
      /* Header container */
      &:nth-child(1) {
      }
      /* Story container */
      &:nth-child(2) {
      }
      /* Documentation container */
      &:nth-child(3) {
      }
    }
  }
`;
