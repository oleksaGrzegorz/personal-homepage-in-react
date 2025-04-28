import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: White;
  box-sizing: border-box;
  width: calc(100% - 32px);
  margin-left: 16px;
  margin-right: 16px;
  max-width: 1216px;
  margin: 0 auto;
  padding: 32px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03);
  margin-top: 72px;

`;


export const Header = styled.h2`
  font-family: Inter;
  line-height: 100%;
  border-bottom: 1px solid rgba(209, 213, 218, 0.3);
  padding-bottom: 13px;
  font-weight: 900;
  font-size: 30px;
  letter-spacing: 5%;
  margin-top: 0;
`;

export const HeaderIcon = styled.span`
  font-family: Inter;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 5%;
  text-align: center;
`;
