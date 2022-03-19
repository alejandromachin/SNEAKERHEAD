import { Ad } from "../../Types/Ad";

interface HotDealsProps {
  ads: Ad[];
}

const HotDeals = ({ ads }: HotDealsProps): JSX.Element => {
  return (
    <>
      <h1>HOT DEALS:</h1>
      {ads.map((ad) => (
        <>
          <img src={ad.image1} alt={ad.colorway} />
          <h2>{ad.brand} </h2>
          <h3>{ad.colorway}</h3>
          <p className="HotDeals__price">{ad.price}</p>
        </>
      ))}
    </>
  );
};
export default HotDeals;
