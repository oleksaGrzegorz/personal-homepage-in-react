import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "./images/github.svg";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
`;

export const StyledGitHubIcon = styled(GitHubIcon)`
  width: 40px;
  height: 39, 01px;
  fill: #0366d6;
`;

export const Header = styled.h2`
  font-family: Inter;
  font-weight: 900;
  font-size: 30px;
  line-height: 100%;
  letter-spacing: 5%;
  padding-top: 12px;
  margin: 0;
`;

export const LeadParagraph = styled.p`
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 5%;
  padding-top: 8;
  margin: 0;
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 32px;
  margin-top: 32px;
  max-width: 1216px;
`;

export const ProjectTile = styled.div`
  box-sizing: border-box;
  padding: 56px;
  width: 592px;
  height: 322px;
  border-radius: 4px;
  border-width: 6px;
  background-color: white;
  border: 6px solid #d1d5da4d;
  box-shadow: 0px 16px 58px 0px #090a3308;
  box-shadow: 0px -2px 50px 0px #090a3305;
`;

export const ProjectName = styled.h3`
  margin: 0;
  font-family: Inter;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 5%;
  color: #0366d6;
`;

export const ProjectDescription = styled.p`
  font-family: Inter;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 5%;
  vertical-align: middle;
  color: #6e7e91;
`;

export const ProjectParagraph = styled.p`
  color: #6e7e91;
  font-family: Inter;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 5%;
  vertical-align: middle;
`;

export const ProjectLink = styled.a`
  font-family: Inter;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  letter-spacing: 5%;
  vertical-align: middle;
  color: #0366d6;
  border-bottom: 1px solid #0366d6;
  text-decoration: none;
`;
