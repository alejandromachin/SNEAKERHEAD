import { useNavigate } from "react-router-dom";
import { Ad } from "../../Types/Ad";
import {
  HotDealsCard,
  HotDealsCardText,
  HotDealsContainer,
  HotDealsTitle,
} from "./HotDealsStyles";

interface HotDealsProps {
  ads: Ad[];
}

const HotDeals = ({ ads }: HotDealsProps): JSX.Element => {
  const navigate = useNavigate();

  const goToAd = (id: string) => {
    navigate(`/ads/${id}`);
  };
  return (
    <>
      <HotDealsTitle>
        <h2 className="HotDeals__title">HOT DEALS:</h2>
      </HotDealsTitle>
      <HotDealsContainer>
        {ads.map((ad) => (
          <HotDealsCard
            onClick={() => {
              goToAd(ad.id);
            }}
            key={ad.id}
          >
            <img src={ad.image1} alt={ad.colorway} width="68" height="90" />
            <img
              className="desktop"
              src={ad.image2}
              alt={ad.colorway}
              width="68"
              height="90"
            />
            <img
              className="desktop"
              src={ad.image3}
              alt={ad.colorway}
              width="68"
              height="90"
            />
            <HotDealsCardText>
              <h3>{ad.brand} </h3>
              <p className="HotDeals__colorway">{ad.colorway}</p>
              <p className="HotDeals__price">{ad.price}</p>
            </HotDealsCardText>
          </HotDealsCard>
        ))}
      </HotDealsContainer>
    </>
  );
};
export default HotDeals;
