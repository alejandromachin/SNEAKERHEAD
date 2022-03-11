import { Ad } from "../../Types/Ad";
import SneakerAd from "../SneakerAd/SneakerAd";

interface SneakerAdListProps {
  ads: Ad[];
}

const SneakerAdList = ({ ads }: SneakerAdListProps): JSX.Element => {
  return (
    <>
      {ads.map((ad) => (
        <SneakerAd ad={ad} key={ad.id} />
      ))}
    </>
  );
};

export default SneakerAdList;
