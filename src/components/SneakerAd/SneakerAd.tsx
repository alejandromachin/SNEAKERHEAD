import { Ad } from "../../Types/Ad";

interface SneakerAdProps {
  ad: Ad;
}

const SneakerAd = ({ ad }: SneakerAdProps): JSX.Element => {
  return (
    <>
      <img src={ad.images[0]} alt={ad.colorway} />
      <p>{ad.condition}</p>
      <p>{ad.price}</p>
    </>
  );
};
export default SneakerAd;
