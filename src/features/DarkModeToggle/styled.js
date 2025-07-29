import styled from "styled-components";

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ToggleLabel = styled.span`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#4b5563")};
  white-space: nowrap;
  margin-right: 12px;
  width: 105px;
`;

export const ToggleButton = styled.button`
  position: relative;
  width: 48px;
  height: 26px;
  background-color: ${(props) => (props.isDarkMode ? "#363636B8" : "#e5e7eb")};
  border-radius: 50px;
  transition: background-color 0.2s;
  cursor: pointer;
  border: none;
  padding: 0;
  border: 1px solid ${(props) => (props.isDarkMode ? "#e5e7eb" : "#363636B8")};

  &:after {
    content: "${(props) => (props.isDarkMode ? "🌙" : "☀️")}";
    position: absolute;
    top: 50%;
    ${(props) => (props.isDarkMode ? "right: 2.5px;" : "left: 2.5px;")}
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-color: ${(props) =>
      props.isDarkMode ? "#e5e7eb" : "#363636B8"};
    border-radius: 50%;
    transition: all 0.2s;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
  }
`;
