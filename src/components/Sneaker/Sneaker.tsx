import { Sneaker as SneakerType } from "../../Types/Sneaker";

interface SneakerProps {
  sneaker: SneakerType;
}

const Sneaker = ({ sneaker }: SneakerProps): JSX.Element => {
  return (
    <>
      <img src={sneaker.image} alt={sneaker.colorway} />
      <p>
        {sneaker.brand} {sneaker.style}
      </p>
      <p>{sneaker.colorway}</p>
      <p>{sneaker.averagePrice}</p>
    </>
  );
};

export default Sneaker;
