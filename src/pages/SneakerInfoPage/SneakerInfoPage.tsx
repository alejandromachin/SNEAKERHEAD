import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { moreInfoSneakerThunk } from "../../redux/thunks/sneakersThunk";
import { Sneaker } from "../../Types/Sneaker";

const SneakerInfoPage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moreInfoSneakerThunk(id as string));
  }, [dispatch, id]);

  return <></>;
};
export default SneakerInfoPage;
