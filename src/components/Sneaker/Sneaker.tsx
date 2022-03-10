import { Sneaker as SneakerType } from "../../Types/Sneaker";
import { SneakerCard, SneakerCardText } from "./SneakerStyles";

interface SneakerProps {
  sneaker: SneakerType;
}

const Sneaker = ({ sneaker }: SneakerProps): JSX.Element => {
  return (
    <SneakerCard>
      <img src={sneaker.image} alt={sneaker.colorway} />
      <SneakerCardText>
        <p className="sneaker_name">
          {sneaker.brand} {sneaker.style}
        </p>
        <p>
          {sneaker.colorway} | {sneaker.averagePrice}
        </p>
      </SneakerCardText>
    </SneakerCard>
  );
};

export default Sneaker;
