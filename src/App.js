import "./App.css";
import Section from "./common/Section";
import { HeaderIcon} from "./common/Section/styled";

function App() {
  return (
    <div className="App">
      <p>
        DARK MODE OFF <button>przycisk</button>
      </p>
      <p>"photo"</p>
      <p>THIS IS</p>
      <p>Grzegorz Oleksa</p>
      <p>
        I'm a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </p>
      <button>"ikonka wiadomosci" Hire Me</button>

      <Section title="My skillset includes " icon={<HeaderIcon>🛠️</HeaderIcon>} />

      <section>
        <p>What I want to learn next "ikonka rakiety"</p>
        <p>"wymienione skille"</p>
      </section>
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
