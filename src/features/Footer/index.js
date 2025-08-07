import {
  ContentWrapper,
  EmailParagraph,
  MidParagraph,
  Section,
  SmallParagraph,
  StyledDiv,
  StyledFacebookIcon,
  StyledGitHubIcon,
  StyledInstagramIcon,
  StyledLinkedinIcon,
} from "./styled";

export const Footer = ({ isDarkMode }) => (
  <Section>
    <ContentWrapper>
      <SmallParagraph>LET'S TALK!</SmallParagraph>
      <EmailParagraph>grzesiek@gmail.com</EmailParagraph>
      <MidParagraph>
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to contact me. ✌️
      </MidParagraph>
      <StyledDiv isDarkMode={isDarkMode}>
        <StyledGitHubIcon /> <StyledFacebookIcon /> <StyledLinkedinIcon />{" "}
        <StyledInstagramIcon />
      </StyledDiv>
    </ContentWrapper>
  </Section>
);
