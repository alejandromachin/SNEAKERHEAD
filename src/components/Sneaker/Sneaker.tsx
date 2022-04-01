import React from "react";
import { useNavigate } from "react-router-dom";
import { Sneaker as SneakerType } from "../../Types/Sneaker";
import { SneakerCard, SneakerCardText } from "./SneakerStyles";

interface SneakerProps {
  sneaker: SneakerType;
}

const Sneaker = ({ sneaker }: SneakerProps): JSX.Element => {
  const navigate = useNavigate();

  const moreInfo = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault();
    navigate(`/sneakers/${sneaker.id}`);
  };

  return (
    <SneakerCard>
      <img onClick={moreInfo} src={sneaker.image} alt={sneaker.colorway} />
      <SneakerCardText>
        <p className="sneaker_name">
          {sneaker.brand} {sneaker.style}
        </p>
        <p>{sneaker.colorway}</p>
        <p>{sneaker.averagePrice}</p>
      </SneakerCardText>
    </SneakerCard>
  );
};

export default Sneaker;
