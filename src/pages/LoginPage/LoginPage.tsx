import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { RootState } from "../../redux/store";
import { LoginFormPageContainer, NotRegistered } from "./LoginPageStyles";

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
      <NotRegistered>
        <p>Still don't have an accont?</p>
        <Link className="LoginPage__registerLink" to={"/register"}>
          Register NOW!
        </Link>
      </NotRegistered>
    </LoginFormPageContainer>
  );
};
export default LoginPage;
