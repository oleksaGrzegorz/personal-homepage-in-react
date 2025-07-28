import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  gap: 8px 0;
  justify-content: flex-start;
`;

export const ListItem = styled.li`
  flex-basis: calc(100% / 3);
  min-width: 0;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 5%;
  color: ${({ theme }) => theme.text};

  &::before {
    content: "•";
    color: rgba(3, 102, 214, 1);
    margin-right: 0.5rem;
    font-size: 30px;
  }

  @media (max-width: 768px) {
    flex-basis: 50%;
  }

  @media (max-width: 480px) {
    flex-basis: 100%;
  }
`;