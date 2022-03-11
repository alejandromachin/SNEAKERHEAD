import { Ad } from "../../Types/Ad";
import { SneakerAdContainer } from "./SneakerAdStyles";

interface SneakerAdProps {
  ad: Ad;
}

const SneakerAd = ({ ad }: SneakerAdProps): JSX.Element => {
  return (
    <SneakerAdContainer>
      <img src={ad.images[0]} alt={ad.colorway} />
      <p>{ad.condition}</p>
      <p>{ad.price}</p>
    </SneakerAdContainer>
  );
};
export default SneakerAd;
