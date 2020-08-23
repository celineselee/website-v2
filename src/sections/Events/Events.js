import React, { Component } from "react";
import eventStrings from "../../res/eventStrings";
import SectionTitleDescription from "../../components/SectionTitleDescription/SectionTitleDescription";
import { StyledDivider, StyledCard } from "./styles";
import EventCard from "../../components/EventCard/EventCard";
import EventCardLeft from "../../components/EventCard/EventCardLeft";
import placeholder from "../../res/images/placeholder.svg";
import { Grid } from "semantic-ui-react";

class StudentLed extends Component {
  render() {
    return (
      <div>
        <StyledDivider />
        <SectionTitleDescription
          title={eventStrings.studentLed.title}
          description={eventStrings.studentLed.blurb}
        />
        <EventCard
          image={placeholder}
          title={eventStrings.studentLed.OHTitle}
          description={eventStrings.studentLed.OHBlurb}
        />
        <EventCardLeft
          image={placeholder}
          title={eventStrings.studentLed.careerTitle}
          description={eventStrings.studentLed.careerBlurb}
        />
        <EventCard
          image={placeholder}
          title={eventStrings.studentLed.communityTitle}
          description={eventStrings.studentLed.communityBlurb}
        />
        <StyledDivider />
        <SectionTitleDescription
          title={eventStrings.facultyLed.title}
          description={eventStrings.facultyLed.blurb}
        />
        <StyledDivider />
        {/*  change grid width if adding more event card, also change eventStrings.js in res */}
        <Grid columns={3}>
          <Grid.Column>
            <StyledCard
              image={placeholder}
              header={eventStrings.event1.title}
              description={eventStrings.event1.description}
            />
          </Grid.Column>
          <Grid.Column>
            <StyledCard
              image={placeholder}
              header={eventStrings.event2.title}
              description={eventStrings.event2.description}
            />
          </Grid.Column>
          <Grid.Column>
            <StyledCard
              image={placeholder}
              header={eventStrings.event3.title}
              description={eventStrings.event3.description}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default StudentLed;
