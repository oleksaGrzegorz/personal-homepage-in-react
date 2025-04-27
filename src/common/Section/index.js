import { Header, StyledSection } from "./styled";

const Section = (props) => (
  <StyledSection>
    <Header>
      {props.title}
      {props.icon}
    </Header>
    {props.body}
  </StyledSection>
);

export default Section;
