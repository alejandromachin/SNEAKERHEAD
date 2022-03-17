import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { userAdsThunk } from "../../redux/thunks/userThunk";
import { Ad } from "../../Types/Ad";
import { User } from "../../Types/User";

const UserAdsPage = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  const userAds = useSelector((state: RootState) => state.userAds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAdsThunk((user as User).id));
  });

  return (
    <>
      {userAds.map((ad: Ad) => (
        <p key={ad.id}> {ad.id} </p>
      ))}
    </>
  );
};
export default UserAdsPage;
