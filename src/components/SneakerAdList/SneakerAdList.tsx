import { Ad } from "../../Types/Ad";
import SneakerAd from "../SneakerAd/SneakerAd";
import { SneakerAdListContainer } from "../SneakersList/SneakerListStyles";

interface SneakerAdListProps {
  ads: Ad[];
}

const SneakerAdList = ({ ads }: SneakerAdListProps): JSX.Element => {
  return (
    <SneakerAdListContainer>
      {ads.map((ad) => (
        <SneakerAd ad={ad} key={ad.id} />
      ))}
    </SneakerAdListContainer>
  );
};

export default SneakerAdList;
