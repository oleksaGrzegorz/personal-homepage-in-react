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
  height: 39.01px;
  fill: #0366d6;
`;

export const Header = styled.h2`
  font-family: Inter;
  font-weight: 900;
  font-size: 30px;
  line-height: 100%;
  letter-spacing: 0.05em;
  padding-top: 12px;
  margin: 0;
`;

export const LeadParagraph = styled.p`
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  padding-top: 8px;
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
  overflow: hidden;
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
  letter-spacing: 0.05em;
  color: #0366d6;
`;

export const ProjectDescription = styled.p`
  font-family: Inter;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  vertical-align: middle;
  color: #6e7e91;
`;

export const ProjectParagraph = styled.p`
  color: #6e7e91;
  font-family: Inter;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  vertical-align: middle;
`;

export const ProjectLink = styled.a`
  font-family: Inter;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  letter-spacing: 0.05em;
  vertical-align: middle;
  color: #0366d6;
  border-bottom: 1px solid #0366d6;
  text-decoration: none;
`;

export const LoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingImg = styled.img`
  width: 160px;
  height: 160px;
`;

export const ErrorContainer = styled.div`
  margin-top: 88px;
  width: 426px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ErrorIcon = styled.img`
  width: 48px;
  height: 48px;
`;

export const ErrorHeader = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0.05em;
  margin-top: 23px;
`;

export const ErrorText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
`;

export const ErrorButton = styled.button`
  background-color: #0366d6;
  border: 1px solid #d1d5da1a;
  color: white;
  font-weight: 600;
  font-size: 20.06px;
  line-height: 100%;
  letter-spacing: 0.05em;
  vertical-align: middle;
  margin-top: 32px;
  border-width: 1px;
  border-radius: 4px;
  padding-top: 12px;
  padding-right: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
  gap: 16px;
`;
