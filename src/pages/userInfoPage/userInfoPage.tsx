import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";

const UserInfoPage = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <>
      <h1>Hello, {user.name}</h1>
      <h2>Profile info:</h2>
      <h3>Name:</h3>
      <p>
        {user.name} {user.lastname}
      </p>
      <h3>Username:</h3>
      <p>{user.username}</p>
      <h3>Email address:</h3>
      <p>{user.email}</p>
      <Link to="">Edit info</Link>
      <Link to="">Log out</Link>
      <Link to="">Items on sale</Link>
    </>
  );
};

export default UserInfoPage;
