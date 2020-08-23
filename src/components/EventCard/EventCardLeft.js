import React, { Component } from "react";
import { Image, Grid } from "semantic-ui-react";
import {
  StyledImage,
  StyledCardTitle,
  StyledCardDescription,
  StyledCardWrapper,
} from "./styles";

class EventCardLeft extends Component {
  render() {
    return (
      <StyledCardWrapper>
        <Grid>
          <Grid.Column width={9}>
            <div>
              <StyledCardTitle>{this.props.title}</StyledCardTitle>
              <StyledCardDescription>
                {this.props.description}
              </StyledCardDescription>
            </div>
          </Grid.Column>
          <Grid.Column width={4}>
            <StyledImage src={this.props.image} size="medium" />
          </Grid.Column>
        </Grid>
      </StyledCardWrapper>
    );
  }
}

export default EventCardLeft;
