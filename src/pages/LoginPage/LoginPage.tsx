import LoginForm from "../../components/LoginForm/LoginForm";
import { LoginFormPageContainer } from "./LoginPageStyles";

const LoginPage = () => {
  return (
    <LoginFormPageContainer>
      <h1>LOG IN:</h1>
      <LoginForm />
    </LoginFormPageContainer>
  );
};
export default LoginPage;
