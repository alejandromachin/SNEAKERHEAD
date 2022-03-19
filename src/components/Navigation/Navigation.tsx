import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeMenuStateAction } from "../../redux/actions/menuActionCreator/menuActionCreator";
import { RootState } from "../../redux/store";
import BurguerMenu from "../BurgerMenu/BurgerMenu";
import FloatingMenu from "../FloatingMenu/FloatingMenu";
import SearchBar from "../SearchBar/SearchBar";
import { NavigationContainer, UserAreaContainer } from "./navigationStyles";

const Navigation = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  const menuState = useSelector((state: RootState) => state.menuState);

  const dispatch = useDispatch();
  const toggleActive = () => {
    dispatch(changeMenuStateAction());
  };

  return (
    <NavigationContainer>
      <BurguerMenu actionOnClick={toggleActive} isActive={menuState} />

      <FloatingMenu />
      <Link to="/home">LOGO</Link>
      <SearchBar />
      <UserAreaContainer>
        {user.name ? (
          <Link to="/privateArea">Profile</Link>
        ) : (
          <>
            <Link to="/register">Register</Link> |{" "}
            <Link to="/login">Login</Link>{" "}
          </>
        )}
      </UserAreaContainer>
    </NavigationContainer>
  );
};
export default Navigation;
