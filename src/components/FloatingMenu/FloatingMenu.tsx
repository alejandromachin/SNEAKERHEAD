import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { FloatingMenuDiv } from "./FloatingMenuStyles";

interface FloatingMenuProps {
  isActive: boolean;
}

const FloatingMenu = ({ isActive }: FloatingMenuProps): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <>
      <FloatingMenuDiv className={isActive ? "active" : ""}>
        <p className="FloatinMenu__greating">
          Hello, {user.name ? user.name : "stranger"}
        </p>

        <ul>
          <Link to={"/register"}>
            <li className="FloatinMenu__Register">
              {user.name ? "" : "Register"}
            </li>
          </Link>
          <li>Home</li>
          <li>All sneakers</li>
        </ul>
      </FloatingMenuDiv>
    </>
  );
};

export default FloatingMenu;
