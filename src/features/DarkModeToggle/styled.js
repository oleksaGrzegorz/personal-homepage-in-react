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
  color: #4b5563;
  white-space: nowrap;
`;

export const ToggleButton = styled.button`
  position: relative;
  width: 47.06px;
  height: 25.07px;
  background-color: ${props => props.isDarkMode ? '#374151' : '#e5e7eb'};
  border-radius: 50px;
  transition: background-color 0.2s;
  cursor: pointer;
  border: none;
  padding: 0;
  
  &:after {
    content: '${props => props.isDarkMode ? "🌙" : "☀️"}';
    position: absolute;
    top: 50%;
    ${props => props.isDarkMode ? 'right: 2.5px;' : 'left: 2.5px;'}
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-color: grey;
    border-radius: 50%;
    transition: all 0.2s;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
  }
`;
