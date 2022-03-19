import { Ad } from "../../Types/Ad";
import {
  HotDealsCard,
  HotDealsCardText,
  HotDealsContainer,
} from "./HotDealsStyles";

interface HotDealsProps {
  ads: Ad[];
}

const HotDeals = ({ ads }: HotDealsProps): JSX.Element => {
  return (
    <>
      <h2>HOT DEALS:</h2>
      <HotDealsContainer>
        {ads.map((ad) => (
          <HotDealsCard>
            <img src={ad.image1} alt={ad.colorway} />
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
