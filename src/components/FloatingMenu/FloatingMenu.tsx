import { useSelector } from "react-redux";
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
          <li className="FloatinMenu__Register">
            {user.name ? "" : "Register"}
          </li>
          <li>Home</li>
          <li>All sneakers</li>
        </ul>
      </FloatingMenuDiv>
    </>
  );
};

export default FloatingMenu;
