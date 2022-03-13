import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { moreInfoAdThunk } from "../../redux/thunks/adsThunks";
import { Ad } from "../../Types/Ad";

const AdinfoPage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const ad = useSelector((state: RootState) => state.ad);

  useEffect(() => {
    dispatch(moreInfoAdThunk(id as string));
  });
  return (
    <>
      <img src={(ad as Ad).images[0]} alt={(ad as Ad).colorway}></img>
      <h1>{(ad as Ad).brand}</h1>
      <h2>{(ad as Ad).colorway}</h2>
      <p className="adInfo__condition">Condition: {(ad as Ad).condition}/10</p>
      <p>{(ad as Ad).box}</p>
    </>
  );
};
export default AdinfoPage;
