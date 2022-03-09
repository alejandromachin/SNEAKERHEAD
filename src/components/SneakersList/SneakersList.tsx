import { Sneaker as sneakerType } from "../../Types/Sneaker";
import Sneaker from "../Sneaker/Sneaker";

interface SneakersListProps {
  sneakers: sneakerType[];
}
const SneakersList = ({ sneakers }: SneakersListProps): JSX.Element => {
  return (
    <>
      {sneakers.map((sneaker: sneakerType) => (
        <Sneaker sneaker={sneaker} />
      ))}
    </>
  );
};
export default SneakersList;
