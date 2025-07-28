import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.sectionBackground};
  color: ${({ theme }) => theme.text};
  box-sizing: border-box;
  width: 100%;
  max-width: 1216px;
  padding: 32px;
  margin: 72px auto 0 auto;
  box-shadow: ${({ theme }) => theme.sectionBoxShadow};
  border-radius: 4px;

  @media (max-width: 767px) {
    padding: 32px 14px;
    margin-top: 48px;
  }
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
