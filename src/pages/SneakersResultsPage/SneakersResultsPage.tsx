import { useEffect } from "react";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import SneakersList from "../../components/SneakersList/SneakersList";
import { loadAllSneakersThunk } from "../../redux/thunks/sneakersThunk";

const SneakerResultsPage = (): JSX.Element => {
  const sneakers = useSelector((state: RootState) => state.sneakers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllSneakersThunk);
  });

  return (
    <>
      <h1>RESULTS:</h1>
      <SneakersList sneakers={sneakers} />
    </>
  );
};

export default SneakerResultsPage;
