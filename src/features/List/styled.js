import styled from "styled-components";

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