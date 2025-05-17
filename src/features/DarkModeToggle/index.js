import { useEffect, useState } from 'react';
import { ToggleButton, ToggleLabel, ToggleWrapper } from './styled';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <ToggleWrapper>
      <ToggleLabel isDarkMode={isDarkMode}>
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