import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "./images/github.svg";

export const Section = styled.section`
  background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
  margin-top: 32px;
  max-width: 1300px;
`;

export const ProjectTile = styled.div`
  background: #f5f5f5;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ProjectName = styled.h3`
  margin: 0 0 10px;
  font-size: 18px;
`;

export const ProjectDescription = styled.p`
  font-size: 14px;
  color: #555;
`;

export const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #0366d6;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;