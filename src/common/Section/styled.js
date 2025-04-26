import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: White;
  max-width: 1216px;
  max-height: 404px;
  padding: 32px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03);
`;

export const Header = styled.h2`
  font-family: Inter;
  line-height: 100%;
  border-bottom: 1px solid rgba(209, 213, 218, 0.3);
  padding-bottom: 13px;
  font-weight: 900;
  font-size: 30px;
  letter-spacing: 5%;
`;

export const HeaderIcon = styled.span`
  font-family: Inter;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 5%;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  gap: 8px 0;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  width: 33%;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 5%;
  color: rgba(110, 126, 145, 1);
  &::before {
    content: "•";
    color: rgba(3, 102, 214, 1);
    margin-right: 0.5rem;
    font-size: 30px;
  }
`;
