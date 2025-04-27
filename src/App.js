import "./App.css";
import Section from "./common/Section";
import { HeaderIcon } from "./common/Section/styled";
import AboutMe from "./features/AboutMe";
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

      <section>
        <p>"ikonka githuba"</p>
        <p>Portfolio</p>
        <p>My recent projects</p>
        <p>"tu miejsce na moje projekty z githuba"</p>
      </section>
      <section>
        <p>LET'S TALK!</p>
        <p>grzesiek@gmail.com</p>
        <p>"tekst o mnie"</p>
        <p>"ikonka github" "facebook" "linkedin" "insta"</p>
      </section>
    </div>
  );
}

export default App;
