import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navigation = (): JSX.Element => {
  return (
    <>
      <Link to="/home">
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/hamburger-menu.png"
          width="20"
          height="20"
          alt="burger-menu"
        ></img>
      </Link>
      <SearchBar />
      <Link to="/home">LOGO</Link> <Link to="/home">REGISTER</Link> |{" "}
      <Link to="/home">LOGIN</Link>{" "}
    </>
  );
};
export default Navigation;
