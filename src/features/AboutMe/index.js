import DarkModeToggle from "../DarkModeToggle/index.js";
import myPhoto from "./images/zdjecie.jpg";

import {
  DarkMode,
  Header,
  HireMeButton,
  InfoText,
  Photo,
  ProfileContainer,
  ProfileInfo,
  SmallFontText,
  StyledMessageIcon,
} from "./styled";

const AboutMe = () => (
  <ProfileContainer>
      <Photo src={myPhoto} alt="Photo of Grzegorz" />
    <ProfileInfo>
      <SmallFontText>THIS IS</SmallFontText>
      <Header>Grzegorz Oleksa</Header>
      <InfoText>
        👨🏻‍💻 I'm a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </InfoText>
      <HireMeButton>
        <StyledMessageIcon />
        Hire Me
      </HireMeButton>
    </ProfileInfo>

    <DarkMode>
      <DarkModeToggle />
    </DarkMode>
  </ProfileContainer>
);

export default AboutMe;
