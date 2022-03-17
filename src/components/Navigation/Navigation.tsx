import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { NavigationContainer, UserAreaContainer } from "./navigationStyles";

const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Link to="/home">
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/hamburger-menu.png"
          width="20"
          height="20"
          alt="burger-menu"
        ></img>
      </Link>
      <Link to="/home">LOGO</Link>
      <SearchBar />
      <UserAreaContainer>
        <Link to="/register">Register</Link> | <Link to="/login">Login</Link>{" "}
      </UserAreaContainer>
    </NavigationContainer>
  );
};
export default Navigation;
