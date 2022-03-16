import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AdForm from "../../components/AdForm/AdForm";
import Button from "../../components/Button/Button";
import { RootState } from "../../redux/store";
import { deleteAdThunk, moreInfoAdThunk } from "../../redux/thunks/adsThunks";
import { Ad } from "../../Types/Ad";
import { Sneaker } from "../../Types/Sneaker";
import { ButtonContainer } from "../SneakerInfoPage/SneakerInfoPageStyles";
import {
  AdMoreInfoContainer,
  AdMoreInfoText,
  DeleteButton,
  FormContainer,
} from "./AdMoreInfoPageStyles";

const AdInfoPage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const ad = useSelector((state: RootState) => state.ad);
  const sneaker = useSelector((state: RootState) => state.sneaker);
  const [showEditForm, setShowEditForm] = useState<boolean>(false);

  useEffect(() => {
    dispatch(moreInfoAdThunk(id as string));
  }, [dispatch, id]);

  const deleteAd = () => {
    dispatch(deleteAdThunk(id as string));
  };

  const editForm = () => {
    setShowEditForm(!showEditForm);
  };
  return (
    <AdMoreInfoContainer>
      {(ad as Ad).images && (
        <img src={(ad as Ad).images[0]} alt={(ad as Ad).colorway}></img>
      )}
      <AdMoreInfoText>
        {showEditForm ? (
          <>
            <FormContainer>
              <AdForm
                sneaker={sneaker as Sneaker}
                text="EDIT"
                userId={(ad as Ad).owner}
                ad={ad as Ad}
              />
              <DeleteButton>
                <Button actionOnClick={deleteAd} text={"DELETE"} />
              </DeleteButton>
            </FormContainer>
            <ButtonContainer>
              <Button actionOnClick={editForm} text={"CANCEL"} />
            </ButtonContainer>
          </>
        ) : (
          <>
            <h1>
              {(ad as Ad).brand} {(ad as Ad).style}
            </h1>
            <h2>{(ad as Ad).colorway} </h2>
            <h3>{(ad as Ad).state}</h3>
            <p>Price: {(ad as Ad).price}</p>
            <p>Condition: {(ad as Ad).condition}/10</p>
            <p>Box: {(ad as Ad).box}</p>
            <p>Size: {(ad as Ad).size}</p>
            <ButtonContainer>
              <Button actionOnClick={editForm} text={"EDIT"} />
            </ButtonContainer>
          </>
        )}
      </AdMoreInfoText>
    </AdMoreInfoContainer>
  );
};
export default AdInfoPage;
