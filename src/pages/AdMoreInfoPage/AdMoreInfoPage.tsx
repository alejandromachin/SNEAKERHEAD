import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { moreInfoAdThunk } from "../../redux/thunks/adsThunks";
import { Ad } from "../../Types/Ad";

const AdInfoPage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const ad = useSelector((state: RootState) => state.ad);

  useEffect(() => {
    dispatch(moreInfoAdThunk(id as string));
  });
  return (
    <>
      {(ad as Ad).images && (
        <img src={(ad as Ad).images[0]} alt={(ad as Ad).colorway}></img>
      )}
      <h1>{(ad as Ad).brand}</h1>
      <h2>{(ad as Ad).colorway} </h2>
      <h3>{(ad as Ad).state}</h3>
      <p className="adInfo__condition">Condition: {(ad as Ad).condition}/10</p>
      <p>Box: {(ad as Ad).box}</p>
      <p>Size: {(ad as Ad).size}</p>
    </>
  );
};
export default AdInfoPage;
