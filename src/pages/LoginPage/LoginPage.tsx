import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { RootState } from "../../redux/store";
import { LoginFormPageContainer } from "./LoginPageStyles";

const LoginPage = () => {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.id && user.id !== "") {
      toast.success("SUCESSFULLY LOGGED!", {
        duration: 1000,
        style: {
          position: "relative",
          top: 330,
          color: "#ff0000",
          backgroundColor: "#d3e2ff",
        },
      });
      setTimeout(() => {
        navigate("/home");
      }, 1000);
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
