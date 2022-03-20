import { useEffect, useState } from "react";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import SneakersList from "../../components/SneakersList/SneakersList";
import { loadAllSneakersThunk } from "../../redux/thunks/sneakersThunk";
import { Sneaker } from "../../Types/Sneaker";
import {
  PaginationButtons,
  SneakersResultsListContainer,
} from "./SneakersResultsListStyles";
import Spinner from "../../components/Spinner/Spinner";
import { ButtonContainer } from "../SneakerInfoPage/SneakerInfoPageStyles";
import Button from "../../components/Button/Button";
import { cleanUpSneakersAction } from "../../redux/actions/sneakersActionCreator/sneakersActionCreator";

const SneakersResultsPage = (): JSX.Element => {
  const sneakers: Sneaker[] = useSelector((state: RootState) => state.sneakers);
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const limit = 6;
  const [skip, setSkip] = useState(0);

  const numberOfPages = 4;

  const nextPage = () => {
    setSkip(skip + limit);
    setPage(page + 1);
  };

  const previousPage = () => {
    setSkip(skip - limit);
    setPage(page - 1);
  };

  useEffect(() => {
    const cleanUp = () => {
      dispatch(cleanUpSneakersAction());
    };

    dispatch(loadAllSneakersThunk(limit, skip));
    return cleanUp;
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
        <PaginationButtons>
          {page !== 1 && (
            <Button actionOnClick={previousPage} text={"PREVIOUS"} />
          )}
          {page !== numberOfPages && (
            <Button actionOnClick={nextPage} text={"NEXT"} />
          )}
        </PaginationButtons>
      </ButtonContainer>
    </>
  );
};

export default SneakersResultsPage;
