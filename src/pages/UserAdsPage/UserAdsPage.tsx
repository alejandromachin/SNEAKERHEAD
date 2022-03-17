import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { userAdsThunk } from "../../redux/thunks/userThunk";
import { User } from "../../Types/User";

const UserAdsPage = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAdsThunk((user as User).id));
  });

  return <></>;
};
export default UserAdsPage;
