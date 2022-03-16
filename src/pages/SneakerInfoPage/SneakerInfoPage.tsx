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
let holdingAds: Ad[] = [];

const SneakerInfoPage = (): JSX.Element => {
  const sizes: number[] = [37, 38, 39, 40, 41, 42, 43, 44, 45];

  const adsPerPage = 2;

  const { id } = useParams();
  const dispatch = useDispatch();
  const sneaker = useSelector((state: RootState) => state.sneaker);
  const ads = useSelector((state: RootState) => state.ads);

  const [adsToShow, setAdsToShow] = useState<Ad[]>([]);
  const [next, setNext] = useState(2);
  const [showSellForm, setShowSellForm] = useState<boolean>(false);

  const sliceAds = useCallback(
    (start: number, end: number) => {
      const slicedAds = ads.slice(start, end);
      holdingAds = [...holdingAds, ...slicedAds];
      setAdsToShow(holdingAds);
    },
    [ads]
  );

  const loadMoreAds = () => {
    sliceAds(next, next + adsPerPage);
    setNext(next + adsPerPage);
  };

  useEffect(() => {
    sliceAds(0, 2);
  }, [sliceAds]);

  useEffect(() => {
    dispatch(moreInfoSneakerThunk(id as string));
    dispatch(loadAllSneakerAdsThunk(id as string));
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
            <Button
              actionOnClick={openSellForm}
              text={showSellForm ? "BUY" : "SELL"}
            />
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
            <Button actionOnClick={loadMoreAds} text={"LOAD MORE"} />
          </ButtonContainer>{" "}
        </>
      )}
      {showSellForm && (
        <AdForm
          userId="622f4fa5fb6b3a28843dd391"
          sneaker={sneaker as Sneaker}
        />
      )}
    </>
  );
};
export default SneakerInfoPage;
