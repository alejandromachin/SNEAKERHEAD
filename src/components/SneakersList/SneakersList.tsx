import { Sneaker as sneakerType } from "../../Types/Sneaker";
import Sneaker from "../Sneaker/Sneaker";
import { SneakerAdListContainer } from "./SneakerListStyles";

interface SneakersListProps {
  sneakers: sneakerType[];
}
const SneakersList = ({ sneakers }: SneakersListProps): JSX.Element => {
  return (
    <SneakerAdListContainer>
      {sneakers.map((sneaker: sneakerType) => (
        <Sneaker sneaker={sneaker} key={sneaker.id} />
      ))}
    </SneakerAdListContainer>
  );
};
export default SneakersList;
