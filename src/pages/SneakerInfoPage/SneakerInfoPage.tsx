import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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
  ActiveFilters,
  ButtonContainer,
  SizeContainer,
  SneakerCard,
  SneakerCardInfo,
  SneakerCardInfoText,
  SneakerCardName,
  SneakerInfoContainer,
} from "./SneakerInfoPageStyles";
import { cleanUpSneakerAction } from "../../redux/actions/sneakersActionCreator/sneakersActionCreator";
import {
  cleanUpAdsAction,
  clearFilterAction,
  sizeFilterAction,
} from "../../redux/actions/adsActionCreator/adsActionCreator";

const SneakerInfoPage = (): JSX.Element => {
  const sizes: number[] = [
    35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 40, 40.5, 41, 41.5, 42, 42.5, 43,
    43.5, 44, 44.5, 45,
  ];

  const limit = window.matchMedia("(min-width: 600px)").matches ? 4 : 2;

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sneaker = useSelector((state: RootState) => state.sneaker);
  const user = useSelector((state: RootState) => state.user);
  const ads = useSelector((state: RootState) => state.ads);

  const filter = useSelector((state: RootState) => state.filter);
  const [showSellForm, setShowSellForm] = useState<boolean>(false);
  const [noMoreAds, setNoMoreAds] = useState<boolean>(false);
  const [filteredAds, setFilteredAds] = useState<Ad[]>([]);
  const [skip, setSkip] = useState(0);
  const [isCreated, setIsCreated] = useState<boolean>(false);

  const loadMoreAds = () => {
    if (!noMoreAds) {
      const loadMore = skip + limit;
      setSkip(skip + limit);
      dispatch(loadAllSneakerAdsThunk(id as string, limit, loadMore));
    }
  };

  useEffect(() => {
    if (isCreated) {
      setShowSellForm(!showSellForm);
      navigate(`/sneakers/${id}`);
    }
  }, [ads, isCreated]);

  useEffect(() => {
    if (sneaker.ads) {
      if (sneaker.ads.length === ads.length) {
        setNoMoreAds(true);
      }
    }
  }, [ads.length, sneaker.ads]);

  useEffect(() => {
    const cleanUp = () => {
      dispatch(cleanUpSneakerAction());
      dispatch(cleanUpAdsAction());
    };
    setFilteredAds([]);

    dispatch(moreInfoSneakerThunk(id as string));
    dispatch(loadAllSneakerAdsThunk(id as string, limit, skip));

    return cleanUp;
  }, [dispatch, id, limit, skip]);

  const openSellForm = () => {
    setShowSellForm(!showSellForm);
  };

  const sizeFilter = (size: number) => {
    dispatch(sizeFilterAction(size));
  };

  const actionOnCreate = () => {
    setIsCreated(true);
  };

  const clearFilters = () => {
    setNoMoreAds(false);
    setFilteredAds([]);
    dispatch(clearFilterAction());
  };

  useEffect(() => {
    if (filter.length > 0 && ads.length > 0) {
      setFilteredAds(
        ads.filter((ad) => (filter as number[]).includes(ad.size))
      );
    }
  }, [filter, ads]);

  const buyAndSellButtonText = showSellForm ? "BUY" : "SELL";
  const loadMoreButtonText = noMoreAds ? "NO MORE ADS TO SHOW" : "LOAD MORE";

  return (
    <>
      <SneakerInfoContainer>
        <img
          src={(sneaker as Sneaker).image}
          alt={(sneaker as Sneaker).colorway}
        />
        <SneakerCard>
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
                  text={buyAndSellButtonText}
                />
              ) : (
                <p className="SneakerInfoPage__loginToSell">LOG IN TO SELL</p>
              )}
            </SellButton>
          </SneakerCardInfo>
        </SneakerCard>
      </SneakerInfoContainer>

      {!showSellForm && (
        <>
          <SizeContainer>
            <div className="slider">
              {sizes.map((size: number) => (
                <div
                  className="slide"
                  key={size}
                  onClick={
                    filter.includes(size as never)
                      ? () => {}
                      : () => sizeFilter(size)
                  }
                >
                  {size}
                </div>
              ))}
            </div>
          </SizeContainer>
          {filter.length > 0 && (
            <>
              <ActiveFilters>
                SELECTED:
                {filter.map((size) => (
                  <span key={size}> {size} </span>
                ))}
              </ActiveFilters>
              <span onClick={() => clearFilters()}>Clear filters x</span>
              {filteredAds.length === 0 && (
                <span>Sorry, there are no ads of this size</span>
              )}
            </>
          )}
          <SneakerAdList ads={filter.length > 0 ? filteredAds : ads} />
          {filter.length === filteredAds.length && (
            <ButtonContainer>
              <Button actionOnClick={loadMoreAds} text={loadMoreButtonText} />
            </ButtonContainer>
          )}
        </>
      )}
      {showSellForm && (
        <AdForm
          userId={user.id as string}
          sneaker={sneaker as Sneaker}
          actionOnCreate={actionOnCreate}
        />
      )}
    </>
  );
};
export default SneakerInfoPage;
