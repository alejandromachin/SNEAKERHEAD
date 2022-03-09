import { Sneaker as SneakerType } from "../../Types/Sneaker";

interface SneakerProps {
  sneaker: SneakerType;
}

const Sneaker = ({ sneaker }: SneakerProps): JSX.Element => {
  return (
    <>
      <img src={sneaker.Image} alt={sneaker.Colorway} />
      <p>
        {sneaker.Brand} {sneaker.Model}
      </p>
      <p>{sneaker.Colorway}</p>
      <p>{sneaker.AveragePrice}</p>
    </>
  );
};

export default Sneaker;
