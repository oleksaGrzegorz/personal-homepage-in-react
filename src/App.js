import "./App.css";
import Section from "./common/Section";
import { HeaderIcon } from "./common/Section/styled";
import AboutMe from "./features/AboutMe";
import { Footer } from "./features/Footer";
import GhProjects from "./features/GhProjects";
import SkillsetList from "./features/List/SkillsetList";
import WhatToLearnList from "./features/List/WhatToLearList";

function App() {
  return (
    <div className="App">
      <AboutMe />

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

      <GhProjects/>
      <Footer/>
    </div>
  );
}

export default App;
