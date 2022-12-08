import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { authorPostAPI, deleteAPI, authorGetAPI } from "../utils/fetchingData";

export const useBag = () => {
  const {
    msg: { setServerMsg },
    loading: { setLoading },
    storedOrders: { setOrderInStore },
  } = useContext(GlobalContext);
  const getStoredItems = async (token) => {
    try {
      setLoading(true);
      const res = await authorGetAPI("/bag", token);
      setOrderInStore(res.data.msg);
      setLoading(false);
    } catch (error) {
      return setServerMsg(error?.response.data.msg);
    }
  };
  const storeInBag = async (product, token) => {
    try {
      await authorPostAPI("/bag", { product }, token);
    } catch (error) {
      return setServerMsg(error?.response.data.msg);
    }
  };
  const removeFromBag = async (id) => {
    try {
      await deleteAPI(`/bag/${id}`);
    } catch (error) {
      return setServerMsg(error?.response.data.msg);
    }
  };
  return { storeInBag, removeFromBag, getStoredItems };
};
