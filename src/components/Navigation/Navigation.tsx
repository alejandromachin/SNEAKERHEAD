import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import BurguerMenu from "../BurgerMenu/BurgerMenu";
import FloatingMenu from "../FloatingMenu/FloatingMenu";
import SearchBar from "../SearchBar/SearchBar";
import { NavigationContainer, UserAreaContainer } from "./navigationStyles";

const Navigation = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  const toggleActive = () => {
    setOpenBurgerMenu(!openBurgerMenu);
  };

  return (
    <NavigationContainer>
      <Link to="/home">
        <BurguerMenu actionOnClick={toggleActive} isActive={openBurgerMenu} />
      </Link>
      <FloatingMenu isActive={openBurgerMenu} />
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
