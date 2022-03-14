import { useNavigate } from "react-router-dom";
import { Ad } from "../../Types/Ad";
import { SneakerAdContainer, SneakerAdListText } from "./SneakerAdStyles";

interface SneakerAdProps {
  ad: Ad;
}

const SneakerAd = ({ ad }: SneakerAdProps): JSX.Element => {
  const navigation = useNavigate();

  const goToMoreInfoAd = () => {
    navigation("/ads/:id");
  };
  return (
    <SneakerAdContainer>
      <img src={ad.images[0]} alt={ad.colorway} onClick={goToMoreInfoAd} />
      <SneakerAdListText>
        <p>{`Condition: ${ad.condition}/10`}</p>
        <p className="sneakerAd__price">{ad.price}</p>
      </SneakerAdListText>
    </SneakerAdContainer>
  );
};
export default SneakerAd;
