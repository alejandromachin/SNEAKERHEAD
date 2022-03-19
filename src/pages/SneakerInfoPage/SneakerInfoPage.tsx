import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { SellButton } from "../../components/Button/ButtonStyles";
import AdForm from "../../components/AdForm/AdForm";
import SneakerAdList from "../../components/SneakerAdList/SneakerAdList";
import { RootState } from "../../redux/store";
import { loadAllSneakerAdsThunk } from "../../redux/thunks/adsThunks";
import { moreInfoSneakerThunk } from "../../redux/thunks/sneakersThunk";
import { Ad } from "../../Types/Ad";
import { Sneaker } from "../../Types/Sneaker";
import {
  ButtonContainer,
  SizeContainer,
  SneakerCardInfo,
  SneakerCardInfoText,
  SneakerCardName,
  SneakerInfoContainer,
} from "./SneakerInfoPageStyles";
import { cleanUpSneakerAction } from "../../redux/actions/sneakersActionCreator/sneakersActionCreator";
import { cleanUpAdsAction } from "../../redux/actions/adsActionCreator/adsActionCreator";
let holdingAds: Ad[] = [];

const SneakerInfoPage = (): JSX.Element => {
  const sizes: number[] = [37, 38, 39, 40, 41, 42, 43, 44, 45];

  const adsPerPage = 2;

  const { id } = useParams();
  const dispatch = useDispatch();
  const sneaker = useSelector((state: RootState) => state.sneaker);
  const user = useSelector((state: RootState) => state.user);
  const ads = useSelector((state: RootState) => state.ads);
  const [adsToShow, setAdsToShow] = useState<Ad[]>([]);
  const [next, setNext] = useState(2);
  const [showSellForm, setShowSellForm] = useState<boolean>(false);
  const [noMoreAds, setNoMoreAds] = useState<boolean>(false);

  const sliceAds = useCallback(
    (start: number, end: number) => {
      const slicedAds = ads.slice(start, end);
      holdingAds = [...holdingAds, ...slicedAds];
      setAdsToShow(holdingAds);
    },
    [ads]
  );

  const loadMoreAds = () => {
    if (adsToShow.length < ads.length) {
      sliceAds(next, next + adsPerPage);
      setNext(next + adsPerPage);
    } else {
      setNoMoreAds(true);
    }
  };

  useEffect(() => {
    sliceAds(0, 2);
  }, [sliceAds]);

  useEffect(() => {
    const cleanUp = () => {
      dispatch(cleanUpSneakerAction());
      dispatch(cleanUpAdsAction());
      holdingAds = [];
    };
    dispatch(moreInfoSneakerThunk(id as string));
    dispatch(loadAllSneakerAdsThunk(id as string));
    return cleanUp;
  }, [dispatch, id]);

  const openSellForm = () => {
    setShowSellForm(!showSellForm);
  };

  return (
    <>
      <SneakerInfoContainer>
        <img
          src={(sneaker as Sneaker).image}
          alt={(sneaker as Sneaker).colorway}
        />
        <SneakerCardName>
          <p className="sneaker_name">
            {(sneaker as Sneaker).brand} {(sneaker as Sneaker).style}
          </p>
          <p>{(sneaker as Sneaker).colorway}</p>
        </SneakerCardName>
        <SneakerCardInfo>
          <SneakerCardInfoText>
            <p>Release date: {(sneaker as Sneaker).releaseDate}</p>
            <p>Average price: {(sneaker as Sneaker).averagePrice}</p>
          </SneakerCardInfoText>
          <SellButton>
            {user.id ? (
              <Button
                actionOnClick={openSellForm}
                text={showSellForm ? "BUY" : "SELL"}
              />
            ) : (
              <p className="SneakerInfoPage__loginToSell">LOG IN TO SELL</p>
            )}
          </SellButton>
        </SneakerCardInfo>
      </SneakerInfoContainer>

      {!showSellForm && (
        <>
          <SizeContainer>
            {sizes.map((size) => (
              <span key={size}>{size}</span>
            ))}
          </SizeContainer>
          <SneakerAdList ads={adsToShow} />
          <ButtonContainer>
            <Button
              actionOnClick={loadMoreAds}
              text={noMoreAds ? "NO MORE ADS TO SHOW" : "LOAD MORE"}
            />
          </ButtonContainer>
        </>
      )}
      {showSellForm && (
        <AdForm userId={user.id as string} sneaker={sneaker as Sneaker} />
      )}
    </>
  );
};
export default SneakerInfoPage;
