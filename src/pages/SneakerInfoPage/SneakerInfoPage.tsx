import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import SneakerAdList from "../../components/SneakerAdList/SneakerAdList";
import { RootState } from "../../redux/store";
import { loadAllSneakerAdsThunk } from "../../redux/thunks/adsThunks";
import { moreInfoSneakerThunk } from "../../redux/thunks/sneakersThunk";
import { Ad } from "../../Types/Ad";
import { Sneaker } from "../../Types/Sneaker";
import {
  ButtonContainer,
  SneakerCardInfo,
  SneakerCardName,
  SneakerInfoContainer,
} from "./SneakerInfoPageStyles";
let holdingAds: Ad[] = [];

const SneakerInfoPage = (): JSX.Element => {
  const adsPerPage = 2;

  const { id } = useParams();
  const dispatch = useDispatch();
  const sneaker = useSelector((state: RootState) => state.sneaker);
  const ads = useSelector((state: RootState) => state.ads);

  const [adsToShow, setAdsToShow] = useState<Ad[]>([]);
  const [next, setNext] = useState(2);

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
          <p>Release date: {(sneaker as Sneaker).releaseDate}</p>
          <p>Average price: {(sneaker as Sneaker).averagePrice}</p>
        </SneakerCardInfo>
      </SneakerInfoContainer>
      <SneakerAdList ads={adsToShow} />
      <ButtonContainer>
        <Button actionOnClick={loadMoreAds} text={"LOAD MORE"} />
      </ButtonContainer>
    </>
  );
};
export default SneakerInfoPage;
