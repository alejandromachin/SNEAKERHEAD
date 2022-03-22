import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { RootState } from "../../redux/store";
import { RegisterPageContainer } from "./RegisterPageStyles";

const RegisterPage = (): JSX.Element => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user.name) {
      toast.success("USER REGISTERED!", {
        duration: 1000,
        style: {
          position: "relative",
          top: 550,
          color: "#ff0000",
          backgroundColor: "#d3e2ff",
        },
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  }, [navigate, user]);

  return (
    <RegisterPageContainer>
      <h1>REGISTER:</h1>
      <RegisterForm />
    </RegisterPageContainer>
  );
};

export default RegisterPage;
