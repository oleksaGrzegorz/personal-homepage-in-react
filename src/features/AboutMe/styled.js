import styled from "styled-components";
import { ReactComponent as MessageIcon } from "./images/message.svg";

export const ProfileContainer = styled.main`
  display: flex;
  flex-direction: row;
  width: 1216px;
  padding-left: 32px;
  padding-right: 32px;
`;

export const ProfilePhoto = styled.div`
  color: red;
`;

export const Photo = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 50%;
  margin-top: 119px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 183px;
  margin-left: 72px;
`;

export const SmallFontText = styled.p`
  font-family: Inter;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: 0%;
  text-transform: uppercase;
  margin: 0 0 12px 0;
`;

export const Header = styled.h1`
  font-family: Inter;
  font-weight: 900;
  font-size: 38px;
  line-height: 100%;
  letter-spacing: 5%;
  margin: 0;
`;

export const InfoText = styled.p`
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 5%;
  color: rgba(110, 126, 145, 1);
`;

export const HireMeButton = styled.button`
  background-color: #0366d6;
  color: white;
  width: 154px;
  height: 49px;
  border: none;
  border-radius: 5%;
  padding: 0;
  font-family: Inter;
  font-weight: 600;
  font-size: 20.06px;
  line-height: 100%;
  letter-spacing: 5%;
  text-align: center;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

`;

export const StyledMessageIcon = styled(MessageIcon)`
  fill: white;
  stroke: white;
  width: 24px;
  height: 24px;
`;

export const DarkMode = styled.p`
  margin-top: 119px;
`;
