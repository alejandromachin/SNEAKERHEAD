import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { userAdsThunk } from "../../redux/thunks/userThunk";
import { Ad } from "../../Types/Ad";
import { UserAdsList } from "./UserAdsPageStyles";

const UserAdsPage = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  const userAds = useSelector((state: RootState) => state.userAds);
  const dispatch = useDispatch();

  const id = useMemo(() => user.id, [user]);

  useEffect(() => {
    dispatch(userAdsThunk(id as string));
  }, [dispatch, id]);

  return (
    <UserAdsList>
      <ul>
        {userAds.map((ad: Ad) => (
          <li key={ad.id}>
            <h2>
              {ad.brand} {ad.style}
            </h2>
            <p>
              {ad.colorway} | {ad.size}{" "}
            </p>
            <p>{ad.price}</p>
          </li>
        ))}
      </ul>
    </UserAdsList>
  );
};
export default UserAdsPage;
