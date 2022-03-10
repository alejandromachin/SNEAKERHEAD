import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { moreInfoSneakerThunk } from "../../redux/thunks/sneakersThunk";
import { Sneaker } from "../../Types/Sneaker";

const SneakerInfoPage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sneaker = useSelector((state: RootState) => state.sneaker);

  useEffect(() => {
    dispatch(moreInfoSneakerThunk(id as string));
  }, [dispatch, id]);

  return (
    <>
      <img
        src={(sneaker as Sneaker).image}
        alt={(sneaker as Sneaker).colorway}
      />
      <p className="sneaker_name">
        {(sneaker as Sneaker).brand} {(sneaker as Sneaker).style}
      </p>
      <p>
        {(sneaker as Sneaker).colorway} | {(sneaker as Sneaker).averagePrice}
      </p>
    </>
  );
};
export default SneakerInfoPage;
