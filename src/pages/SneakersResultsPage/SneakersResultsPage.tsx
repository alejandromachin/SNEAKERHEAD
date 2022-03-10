import { useEffect } from "react";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import SneakersList from "../../components/SneakersList/SneakersList";
import { loadAllSneakersThunk } from "../../redux/thunks/sneakersThunk";
import { Sneaker } from "../../Types/Sneaker";

const SneakerResultsPage = (): JSX.Element => {
  const sneakers: Sneaker[] = useSelector((state: RootState) => state.sneakers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllSneakersThunk);
  }, [dispatch]);

  console.log(sneakers);
  return (
    <>
      <h1>RESULTS:</h1>
      <SneakersList sneakers={sneakers} />
    </>
  );
};

export default SneakerResultsPage;
