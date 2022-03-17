import { useEffect } from "react";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import SneakersList from "../../components/SneakersList/SneakersList";
import { loadAllSneakersThunk } from "../../redux/thunks/sneakersThunk";
import { Sneaker } from "../../Types/Sneaker";
import { SneakersResultsListContainer } from "./SneakersResultsListStyles";
import Spinner from "../../components/Spinner/Spinner";

const SneakersResultsPage = (): JSX.Element => {
  const sneakers: Sneaker[] = useSelector((state: RootState) => state.sneakers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllSneakersThunk);
  }, [dispatch]);

  return (
    <>
      <h1 className="sneakerResults_tittle">RESULTS:</h1>
      {sneakers.length === 0 ? (
        <Spinner />
      ) : (
        <SneakersResultsListContainer>
          <SneakersList sneakers={sneakers} />
        </SneakersResultsListContainer>
      )}
    </>
  );
};

export default SneakersResultsPage;
