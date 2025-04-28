import { useState } from 'react';
import { ToggleButton, ToggleLabel, ToggleWrapper } from './styled';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ToggleWrapper>
      <ToggleLabel>
        {isDarkMode ? 'DARK MODE ON' : 'DARK MODE OFF'}
      </ToggleLabel>
      <ToggleButton 
        onClick={toggleDarkMode} 
        isDarkMode={isDarkMode}
        aria-pressed={isDarkMode}
      />
    </ToggleWrapper>
  );
}