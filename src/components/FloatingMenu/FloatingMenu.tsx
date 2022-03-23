import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeMenuStateAction } from "../../redux/actions/menuActionCreator/menuActionCreator";
import { RootState } from "../../redux/store";
import { FloatingMenuDiv } from "./FloatingMenuStyles";

const FloatingMenu = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  const menuState = useSelector((state: RootState) => state.menuState);
  const dispatch = useDispatch();
  const closeMenu = () => {
    dispatch(changeMenuStateAction());
  };

  return (
    <>
      <FloatingMenuDiv className={menuState ? "active" : ""}>
        <p className="FloatinMenu__greating">
          Hello, {user.name ? user.name : "stranger"}
        </p>
        <ul>
          <li className="FloatinMenu__Register">
            <Link to={"/register"} onClick={closeMenu}>
              {user.name ? "" : "Register"}
            </Link>
          </li>
          <li>
            <Link to={"/home"} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/sneakers"} onClick={closeMenu}>
              All sneakers
            </Link>
          </li>
        </ul>
      </FloatingMenuDiv>
    </>
  );
};

export default FloatingMenu;
