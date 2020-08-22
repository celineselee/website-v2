import React, {Component} from 'react';
import pastExecStrings from "../../res/PastExecStrings";
import {StyledChevronIcon, StyledExecsWrapper, StyledImageWrapper, StyledPastExecsSectionWrapper} from "./styles";
import {Accordion, AccordionContent, AccordionTitle, GridColumn, Image} from "semantic-ui-react";
import {StyledDescription, StyledTitle} from "../../components/SectionTitleDescription/styles";
import past_executives from '../../res/images/past_execustives_section.svg';
import PastCommitteeCard from "../../components/PastCommitteeCard/PastCommitteeCard";

// Component for past committee section
class PastCommittee extends Component {
  state = {
    active: false
  };

  handleClick = () => {
    this.setState({
      active: !this.state.active
    })
  };

  renderCard = (name, position, term) => {
    return (
      <PastCommitteeCard
        name={name}
        position={position}
        term={term}/>
    )
  };

  render() {
    const {active} = this.state;
    return (
      <StyledPastExecsSectionWrapper>
        <Accordion>
          <AccordionTitle
            active={active}
            onClick={this.handleClick}>
            <StyledTitle>
              {pastExecStrings.title}
              {active
                ? <StyledChevronIcon size='small' name='chevron up'/>
                : <StyledChevronIcon size='small' name='chevron down'/>}
            </StyledTitle>
          </AccordionTitle>

          <AccordionContent active={active}>
            <StyledDescription>
              {pastExecStrings.description}
            </StyledDescription>
            <StyledImageWrapper>
              <Image src={past_executives}/>
            </StyledImageWrapper>
            <StyledExecsWrapper columns={6}>
              {Object.entries(pastExecStrings.pastExecs).map(([term, execs]) => (
                Object.entries(execs).map(([exec, execName]) => (
                  <GridColumn>
                    {this.renderCard(execName, `${exec === "exec1" ? "Chair" : "Executive"}`, term)}
                  </GridColumn>
                ))
              ))}
            </StyledExecsWrapper>
          </AccordionContent>
        </Accordion>
      </StyledPastExecsSectionWrapper>
    )
  }
}

export default PastCommittee;