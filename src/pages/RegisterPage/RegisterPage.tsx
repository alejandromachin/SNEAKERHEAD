import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { RegisterPageContainer } from "./RegisterPageStyles";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageContainer>
      <h1>REGISTER:</h1>
      <RegisterForm />
    </RegisterPageContainer>
  );
};

export default RegisterPage;
