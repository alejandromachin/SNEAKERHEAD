import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Button from "../../components/Button/Button";
import EditAdForm from "../../components/EditAdForm/EditAdForm";
import { RootState } from "../../redux/store";
import { deleteAdThunk, moreInfoAdThunk } from "../../redux/thunks/adsThunks";
import { Ad } from "../../Types/Ad";
import { ButtonContainer } from "../SneakerInfoPage/SneakerInfoPageStyles";
import {
  AdMoreInfoCarousel,
  AdMoreInfoContainer,
  AdMoreInfoText,
  DeleteButton,
  FormContainer,
} from "./AdMoreInfoPageStyles";

const AdMoreInfoPage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const ad = useSelector((state: RootState) => state.ad);
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
    <>
      <AdMoreInfoContainer>
        <AdMoreInfoCarousel>
          <Carousel showThumbs={false} showStatus={false} showArrows={false}>
            <img src={(ad as Ad).image1} alt={(ad as Ad).colorway}></img>

            <div>
              <img src={(ad as Ad).image1} alt={(ad as Ad).colorway}></img>
            </div>
            <div>
              <img src={(ad as Ad).image1} alt={(ad as Ad).colorway}></img>
            </div>
            <div>
              <img src={(ad as Ad).image4} alt={(ad as Ad).colorway}></img>
            </div>
          </Carousel>
        </AdMoreInfoCarousel>
        <AdMoreInfoText>
          {showEditForm ? (
            <>
              <FormContainer>
                <EditAdForm ad={ad as Ad} actionOnEdit={editForm} />
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
    </>
  );
};
export default AdMoreInfoPage;
