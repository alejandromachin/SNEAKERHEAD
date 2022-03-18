import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { userAdsThunk } from "../../redux/thunks/userThunk";
import { Ad } from "../../Types/Ad";
import { UserInfoContainer, UserTittle } from "../UserPage/UserInfoPageStyles";
import { UserAdsInfo, UserAdsList, UserAdsPrice } from "./UserAdsPageStyles";

const UserAdsPage = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  const userAds = useSelector((state: RootState) => state.userAds);
  const dispatch = useDispatch();

  const id = useMemo(() => user.id, [user]);

  useEffect(() => {
    dispatch(userAdsThunk(id as string));
  }, [dispatch, id]);

  return (
    <UserInfoContainer>
      <UserTittle>
        <h1>Hello, {user.name}</h1>
      </UserTittle>
      <UserAdsList>
        <ul>
          {userAds.map((ad: Ad) => (
            <li key={ad.id}>
              <UserAdsInfo>
                <h2>
                  {ad.brand} {ad.style}
                </h2>
                <p>
                  {ad.colorway} | size: {ad.size}{" "}
                </p>
              </UserAdsInfo>
              <UserAdsPrice>
                <p className="UserAds__price">{ad.price}</p>
              </UserAdsPrice>
            </li>
          ))}
        </ul>
      </UserAdsList>
    </UserInfoContainer>
  );
};
export default UserAdsPage;
