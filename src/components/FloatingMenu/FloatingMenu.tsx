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
          <Link to={"/register"} onClick={closeMenu}>
            <li className="FloatinMenu__Register">
              {user.name ? "" : "Register"}
            </li>
          </Link>
          <Link to={"/home"} onClick={closeMenu}>
            <li>Home</li>
          </Link>
          <Link to={"/sneakers"} onClick={closeMenu}>
            <li>All sneakers</li>
          </Link>
        </ul>
      </FloatingMenuDiv>
    </>
  );
};

export default FloatingMenu;
