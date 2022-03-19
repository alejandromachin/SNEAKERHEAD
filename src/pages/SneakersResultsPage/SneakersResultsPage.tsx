import { useEffect, useState } from "react";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import SneakersList from "../../components/SneakersList/SneakersList";
import { loadAllSneakersThunk } from "../../redux/thunks/sneakersThunk";
import { Sneaker } from "../../Types/Sneaker";
import { SneakersResultsListContainer } from "./SneakersResultsListStyles";
import Spinner from "../../components/Spinner/Spinner";
import { ButtonContainer } from "../SneakerInfoPage/SneakerInfoPageStyles";
import Button from "../../components/Button/Button";

const SneakersResultsPage = (): JSX.Element => {
  const sneakers: Sneaker[] = useSelector((state: RootState) => state.sneakers);
  const dispatch = useDispatch();

  const limit = 6;
  const [skip, setSkip] = useState(0);

  const nextPage = () => {
    setSkip(skip + limit);
  };

  const previousPage = () => {
    setSkip(skip - limit);
  };

  useEffect(() => {
    dispatch(loadAllSneakersThunk(limit, skip));
  }, [dispatch, skip, limit]);

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
      <ButtonContainer>
        <Button actionOnClick={previousPage} text={"PREVIOUS"} />
        <Button actionOnClick={nextPage} text={"NEXT"} />
      </ButtonContainer>
    </>
  );
};

export default SneakersResultsPage;
