import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { moreInfoAdThunk } from "../../redux/thunks/adsThunks";

const AdinfoPage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const ad = useSelector((state: RootState) => state.ad);

  useEffect(() => {
    dispatch(moreInfoAdThunk(id as string));
  });
  return <></>;
};
export default AdinfoPage;
