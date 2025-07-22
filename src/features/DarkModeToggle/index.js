import { ToggleButton, ToggleLabel, ToggleWrapper } from "./styled";

export default function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
  return (
    <ToggleWrapper>
      <ToggleLabel isDarkMode={isDarkMode}>
        {isDarkMode ? "DARK MODE ON" : "DARK MODE OFF"}
      </ToggleLabel>
      <ToggleButton
        onClick={toggleDarkMode}
        isDarkMode={isDarkMode}
        aria-pressed={isDarkMode}
      />
    </ToggleWrapper>
  );
}
