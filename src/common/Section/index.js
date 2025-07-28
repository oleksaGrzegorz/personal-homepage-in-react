import { Header, StyledSection } from "./styled";

const Section = ({title,icon,body, isDarkMode}) => (
  <StyledSection>
    <Header>
      {title}
      {icon}
    </Header>
    {body}
  </StyledSection>
);

export default Section;
