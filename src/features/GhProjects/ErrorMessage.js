import {
  ErrorButton,
  ErrorContainer,
  ErrorHeader,
  ErrorIcon,
  ErrorText,
} from "./styled";
import triangle from "./images/alert.png";

const ErrorMessage = () => {
  return (
    <ErrorContainer>
      <ErrorIcon src={triangle} alt="Warning icon" />
      <ErrorHeader>Ooops! Something went wrong...</ErrorHeader>
      <ErrorText>
        Sorry, failed to load Github projects. You can check them directly on
        Github.
      </ErrorText>
      <ErrorButton>Go to Github</ErrorButton>
    </ErrorContainer>
  );
};

export default ErrorMessage;
