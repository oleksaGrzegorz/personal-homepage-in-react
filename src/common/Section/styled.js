import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.sectionBackground};
  color: ${({ theme }) => theme.text};
  box-sizing: border-box;
  width: calc(100% - 32px);
  max-width: 1216px;
  padding: 32px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03);
  margin-top: 72px;
  border-radius: 4px;
`;

export const Header = styled.h2`
  line-height: 100%;
  border-bottom: 1px solid rgba(209, 213, 218, 0.3);
  padding-bottom: 13px;
  font-weight: 900;
  font-size: 30px;
  letter-spacing: 0.05em;
  margin-top: 0;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.headerColor};
`;

export const HeaderIcon = styled.span`
  font-weight: 400;
  font-size: 24px;
  line-height: 1;
  letter-spacing: 0.05em;
  text-align: center;
  width: 27px;
  height: 32px;
  display: inline-block;
`;
