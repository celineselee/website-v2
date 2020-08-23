import styled from "styled-components";
import { Image } from "semantic-ui-react";

export const StyledImage = styled(Image)`
  &&& {
    margin-top: 50px;
    margin-bottom: 20px;
    border-radius: 20px;
  }
`;

// Styles for the card title
export const StyledCardTitle = styled.body`
  &&& {
    margin: 90px 0px 15px 0px;
    font-family: "Karla Bold";
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    letter-spacing: -0.02em;
    color: #000000;
    text-transform: none;
  }
`;

// Styles for the card description
export const StyledCardDescription = styled.body`
  &&& {
    margin: 7px 70px 15px 0px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    color: #000000;
    text-transform: none;
  }
`;

// Styles for the wrapper of the card
export const StyledCardWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
  }
`;

