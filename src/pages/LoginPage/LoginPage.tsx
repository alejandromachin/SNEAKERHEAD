import LoginForm from "../../components/LoginForm/LoginForm";
import { LoginFormContainer } from "./LoginPageStyles";

const LoginPage = () => {
  return (
    <LoginFormContainer>
      <h1>LOG IN:</h1>
      <LoginForm />
    </LoginFormContainer>
  );
};
export default LoginPage;
