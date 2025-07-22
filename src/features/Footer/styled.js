import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "./images/github.svg";
import { ReactComponent as FacebookIcon } from "./images/facebook.svg";
import { ReactComponent as LinkedinIcon } from "./images/linkedin.svg";
import { ReactComponent as InstagramIcon } from "./images/instagram.svg";

export const Section = styled.section`
  box-sizing: border-box;
  width: calc(100% - 32px);
  max-width: 1216px;
  margin: 120px auto 109px auto;
`;

export const ContentWrapper = styled.div`
  max-width: 691px;
`;

export const SmallParagraph = styled.p`
  font-family: Inter;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: 0%;
  text-transform: uppercase;
  color: #6e7e91;
`;

export const EmailParagraph = styled.p`
  font-family: Inter;
  font-weight: 900;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 5%;
`;

export const MidParagraph = styled.p`
  font-family: Inter;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 5%;
`;

export const StyledDiv = styled.div`
fill: ${({ isDarkMode }) => (isDarkMode ? "#eee" : "#black")};
`;

export const StyledGitHubIcon = styled(GitHubIcon)`
  width: 48px;
  height: 48px;
  color: white;
  :hover {
    fill: #0366d6;
  }
`;

export const StyledFacebookIcon = styled(FacebookIcon)`
  width: 48px;
  height: 48px;
  :hover {
    fill: #0366d6;
  }
`;

export const StyledLinkedinIcon = styled(LinkedinIcon)`
  width: 48px;
  height: 48px;
  :hover {
    fill: #0366d6;
  }
`;

export const StyledInstagramIcon = styled(InstagramIcon)`
  width: 48px;
  height: 48px;

  :hover {
    fill: #0366d6;
  }
`;
