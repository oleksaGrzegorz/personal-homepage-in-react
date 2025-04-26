import { Header, List, ListItem, StyledSection } from "./styled";

const Section = (props) => (
  <StyledSection>
    <Header>{props.title}{props.icon}</Header>
    <List>
      <ListItem>Semantic & accessible HTML</ListItem>
      <ListItem>Responsive Web Design</ListItem>
      <ListItem>GitHub Pull Requests & Review</ListItem>
      <ListItem>Markdown</ListItem>
      <ListItem>Immutability</ListItem>
      <ListItem>CSS BEM convention</ListItem>
      <ListItem>CSS Grid</ListItem>
      <ListItem>CSS Flexbox</ListItem>
      <ListItem>React Router</ListItem>
      <ListItem>Redux-Saga</ListItem>
      <ListItem>Redux (Toolkit)</ListItem>
      <ListItem>React Hooks</ListItem>
      <ListItem>Error handling</ListItem>
      <ListItem>Working with API (fetch, axios)</ListItem>
      <ListItem>JavaScript: ES6+</ListItem>
      <ListItem>Promises, Async/Await</ListItem>
      <ListItem>GitHub Pull Requests & Review</ListItem>
      <ListItem>Trello</ListItem>
      <ListItem>Scrum</ListItem>
      <ListItem>NPM</ListItem>
      <ListItem>React</ListItem>
      <ListItem>Git</ListItem>
    </List>
  </StyledSection>
);

export default Section;
