import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { RootState } from "../../redux/store";
import { LoginFormPageContainer } from "./LoginPageStyles";

const LoginPage = () => {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.name) {
      navigate("/home");
    }
  }, [navigate, user]);

  return (
    <LoginFormPageContainer>
      <h1>LOG IN:</h1>
      <LoginForm />
    </LoginFormPageContainer>
  );
};
export default LoginPage;
