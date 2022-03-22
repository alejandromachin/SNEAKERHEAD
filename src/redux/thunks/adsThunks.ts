import axios from "axios";
import { Dispatch } from "react";
import toast from "react-hot-toast";
import { AdAction, DeleteAdAction, LoadAdsAction } from "../../Types/Action";
import { Ad } from "../../Types/Ad";
import { ErrorAction } from "../../Types/Error";
import {
  createAdAction,
  deleteAdAction,
  editAdAction,
  loadAdAction,
  loadAdsAction,
  loadHotDealsAction,
} from "../actions/adsActionCreator/adsActionCreator";
import { errorAction } from "../actions/errorsActionCreator/errorActionCreator";

interface AdData {
  data: Ad;
}
interface AdsData {
  data: Ad[];
}

export const loadAllSneakerAdsThunk =
  (id: string, limit: number, skip: number) =>
  async (dispatch: Dispatch<LoadAdsAction>) => {
    const url = `${process.env.REACT_APP_URL}ads/${id}?limit=${limit}&skip=${skip}`;

    const { data }: AdsData = await axios.get(url);

    dispatch(loadAdsAction(data));
  };

export const moreInfoAdThunk =
  (id: string) => async (dispatch: Dispatch<AdAction>) => {
    const url = `${process.env.REACT_APP_URL}ads/detail/${id}`;

    const { data }: AdData = await axios.get(url);

    dispatch(loadAdAction(data));
  };

export const createAdThunk =
  (adData: FormData) =>
  async (dispatch: Dispatch<AdAction> | Dispatch<ErrorAction>) => {
    const url = `${process.env.REACT_APP_URL}ads/new`;

    await axios
      .post(url, adData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        (dispatch as Dispatch<AdAction>)(createAdAction(response.data));
        toast.success("CREATED", {
          duration: 1000,
          style: {
            position: "relative",
            top: 530,
            color: "#ff0000",
            backgroundColor: "#d3e2ff",
          },
        });
      })
      .catch((error) => {
        (dispatch as Dispatch<ErrorAction>)(errorAction(error.response.data));
        toast.error(`${error.response.data.message}`, {
          duration: 1000,
          style: {
            position: "relative",
            top: 530,
            color: "#ff0000",
            backgroundColor: "#d3e2ff",
          },
        });
      });
  };

export const deleteAdThunk =
  (id: string) =>
  async (dispatch: Dispatch<DeleteAdAction> | Dispatch<ErrorAction>) => {
    const url = `${process.env.REACT_APP_URL}ads/${id}`;

    await axios
      .delete(url)
      .then((response) => {
        (dispatch as Dispatch<DeleteAdAction>)(
          deleteAdAction(response.data.id)
        );
        toast.success("DELETED", {
          duration: 1000,
          style: {
            position: "relative",
            top: 530,
            color: "#ff0000",
            backgroundColor: "#d3e2ff",
          },
        });
      })
      .catch((error) => {
        (dispatch as Dispatch<ErrorAction>)(errorAction(error.response.data));
        toast.error(`${error.response.data.message}`, {
          duration: 1000,
          style: {
            position: "relative",
            top: 530,
            color: "#ff0000",
            backgroundColor: "#d3e2ff",
          },
        });
      });
  };

export const editAdThunk =
  (adData: FormData, adId: string) =>
  async (dispatch: Dispatch<AdAction> | Dispatch<ErrorAction>) => {
    const url = `${process.env.REACT_APP_URL}ads/${adId}`;

    await axios
      .patch(url, adData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        (dispatch as Dispatch<AdAction>)(editAdAction(response.data));
        toast.success("EDITED", {
          duration: 1000,
          style: {
            position: "relative",
            top: 530,
            color: "#ff0000",
            backgroundColor: "#d3e2ff",
          },
        });
      })
      .catch((error) => {
        (dispatch as Dispatch<ErrorAction>)(errorAction(error.response.data));
        toast.error(`${error.response.data.message}`, {
          duration: 1000,
          style: {
            position: "relative",
            top: 530,
            color: "#ff0000",
            backgroundColor: "#d3e2ff",
          },
        });
      });
  };

export const loadHotDealsThunk = async (
  dispatch: Dispatch<LoadAdsAction> | Dispatch<ErrorAction>
) => {
  const url = `${process.env.REACT_APP_URL}ads/hotdeals/load`;

  await axios
    .get(url)
    .then((response) => {
      (dispatch as Dispatch<LoadAdsAction>)(loadHotDealsAction(response.data));
    })
    .catch((error) => {
      (dispatch as Dispatch<ErrorAction>)(errorAction(error.response.data));
    });
};
