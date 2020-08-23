import styled from "styled-components";
import { Card } from "semantic-ui-react";

export const StyledDivider = styled.div`
  &&& {
        height: 40px;
  }
`;

// Styles for the faculty-event led cards
export const StyledCard = styled(Card)`
  &&& {
    width: 300px;
    text-transform: none;
    font-family: "Karla";
  }
`;
