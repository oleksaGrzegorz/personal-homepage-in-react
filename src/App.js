import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import "./App.css";
import Section from "./common/Section";
import { HeaderIcon } from "./common/Section/styled";
import AboutMe from "./features/AboutMe";
import { Footer } from "./features/Footer";
import GhProjects from "./features/GhProjects";
import SkillsetList from "./features/List/SkillsetList";
import WhatToLearnList from "./features/List/WhatToLearList";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div className="App">
        <AboutMe isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Section
          title="My skillset includes  "
          icon={<HeaderIcon>🛠️</HeaderIcon>}
          body={<SkillsetList />}
        />
        <Section
          title="What I want to learn next  "
          icon={<HeaderIcon>🚀</HeaderIcon>}
          body={<WhatToLearnList />}
        />
        <GhProjects />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </ThemeProvider>
  );
}

export default App;
