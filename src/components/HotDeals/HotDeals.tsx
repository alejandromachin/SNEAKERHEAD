import { Ad } from "../../Types/Ad";

interface HotDealsProps {
  ads: Ad[];
}

const HotDeals = ({ ads }: HotDealsProps): JSX.Element => {
  return (
    <>
      <h2>HOT DEALS:</h2>
      {ads.map((ad) => (
        <>
          <img src={ad.image1} alt={ad.colorway} />
          <h3>{ad.brand} </h3>
          <p className="HotDeals__colorway">{ad.colorway}</p>
          <p className="HotDeals__price">{ad.price}</p>
        </>
      ))}
    </>
  );
};
export default HotDeals;
