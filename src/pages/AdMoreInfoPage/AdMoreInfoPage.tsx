import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { RootState } from "../../redux/store";
import { moreInfoAdThunk } from "../../redux/thunks/adsThunks";
import { Ad } from "../../Types/Ad";
import { AdMoreInfoContainer, AdMoreInfoText } from "./AdMoreInfoPageStyles";

const AdInfoPage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const ad = useSelector((state: RootState) => state.ad);

  useEffect(() => {
    dispatch(moreInfoAdThunk(id as string));
  });

  return (
    <AdMoreInfoContainer>
      {(ad as Ad).images && (
        <img src={(ad as Ad).images[0]} alt={(ad as Ad).colorway}></img>
      )}
      <AdMoreInfoText>
        <h1>
          {(ad as Ad).brand} {(ad as Ad).style}
        </h1>
        <h2>{(ad as Ad).colorway} </h2>
        <h3>{(ad as Ad).state}</h3>
        <p>Price: {(ad as Ad).price}</p>
        <p>Condition: {(ad as Ad).condition}/10</p>
        <p>Box: {(ad as Ad).box}</p>
        <p>Size: {(ad as Ad).size}</p>
        <Button actionOnClick={} text={"DELETE"} />
      </AdMoreInfoText>
    </AdMoreInfoContainer>
  );
};
export default AdInfoPage;
