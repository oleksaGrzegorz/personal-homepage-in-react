import { useEffect, useState } from "react";
import {
  Section,
  Header,
  LeadParagraph,
  StyledGitHubIcon,
  ProjectsWrapper,
  ProjectTile,
  ProjectName,
  ProjectDescription,
  ProjectLink,
  ProjectParagraph,
  LoadingImg,
  LoadingDiv,
} from "./styled";
import ErrorMessage from "./ErrorMessage";
import LoadingGif from "./images/tube-spinner.svg";

const GhProjects = ({isDarkMode}) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const username = "oleksaGrzegorz";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        if (!res.ok) throw new Error("Błąd pobierania");
        return res.json();
      })
      .then((data) => {
        setRepos(data);

        setTimeout(() => {
          setLoading(false);
        }, 3000);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  }, []);
  return (
    <Section>
      <StyledGitHubIcon />
      <Header>Portfolio</Header>
      <LeadParagraph>My recent projects</LeadParagraph>

      {loading && (
        <LoadingDiv>
          <p>Please wait, projects are being loaded...</p>
          <LoadingImg src={LoadingGif} alt="loading gif" />
        </LoadingDiv>
      )}
      {!loading && error && <ErrorMessage />}

      {!loading && !error && (
        <ProjectsWrapper>
          {repos.map((repo) => (
            <ProjectTile key={repo.id} isDarkMode={isDarkMode}>
              <ProjectName>{repo.name}</ProjectName>
              <ProjectDescription>
                {repo.description || "Brak opisu"}
              </ProjectDescription>
              {repo.homepage && (
                <ProjectParagraph>
                  Demo:{" "}
                  <ProjectLink
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {repo.homepage}
                  </ProjectLink>
                </ProjectParagraph>
              )}
              <ProjectParagraph>
                Code:{" "}
                <ProjectLink
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {repo.html_url}
                </ProjectLink>
              </ProjectParagraph>
            </ProjectTile>
          ))}
        </ProjectsWrapper>
      )}
    </Section>
  );
};

export default GhProjects;
