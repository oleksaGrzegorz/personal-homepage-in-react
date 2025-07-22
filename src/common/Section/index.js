import { Header, StyledSection } from "./styled";

const Section = ({title,icon,body, isDarkMode}) => (
  <StyledSection isDarkMode={isDarkMode}>
    <Header>
      {title}
      {icon}
    </Header>
    {body}
  </StyledSection>
);

export default Section;
