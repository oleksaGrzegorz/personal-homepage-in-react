import styled from "styled-components";
import { ReactComponent as MessageIcon } from "./images/message.svg";

export const ProfileContainer = styled.main`
  display: flex;
  flex-direction: row;
  max-width: 1216px;
  width: 100%;
  padding: 32px;

  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 0px;
  }
`;

export const Photo = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 50%;
  margin-top: 119px;

    @media (max-width: 767px) {
    width: 132.67px;
    height: 132.67px;
    margin-top: 0px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 183px;
  margin-left: 72px;

      @media (max-width: 767px) {
    margin-top: 0px;
    margin-left: 0px;
    width: 100%;
  }
`;

export const SmallFontText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: 0%;
  text-transform: uppercase;
  margin: 0 0 12px 0;
`;

export const Header = styled.h1`
  font-weight: 900;
  font-size: 38px;
  line-height: 100%;
  letter-spacing: 0.05em;
  margin: 0;
`;

export const InfoText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.text};
`;

export const HireMeButton = styled.button`
  background-color: #0366d6;
  color: white;
  width: 154px;
  height: 49px;
  border: none;
  border-radius: 4px;
  padding: 0;
  font-weight: 600;
  font-size: 20.06px;
  line-height: 100%;
  letter-spacing: 0.05em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

&:hover {
border: 2px solid rgb(82, 146, 220);
}
`;

export const StyledMessageIcon = styled(MessageIcon)`
  fill: white;
  stroke: white;
  width: 24px;
  height: 24px;
`;

export const DarkMode = styled.div`
  margin-top: 119px;

  @media (max-width: 767px) {
    margin-top: 0;
    order: -1;
    align-self: flex-end;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;
