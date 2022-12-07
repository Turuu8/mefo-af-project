import { useContext } from "react";
import { getAPI } from "../utils/fetchingData";
import { GlobalContext } from "../context/GlobalContext";

export const useProduct = () => {
  const {
    msg: { setServerMsg },
    loading: { setLoading },
    detail: { setProDetail },
    allPro: { setAllProducts },
    menPro: { setMenProducts },
    womenPro: { setWomenProducts },
  } = useContext(GlobalContext);
  const allProducts = async () => {
    try {
      setLoading(true);
      const res = await getAPI("/product");
      setAllProducts(res.data.products);
      setLoading(false);
    } catch (error) {
      return setServerMsg(error?.response.data.msg);
    }
  };
  const getAllProducts = async (limit) => {
    try {
      setLoading(true);
      const res = await getAPI(`/product?limit=${limit * 9}`);
      setAllProducts(res.data.products);
      setLoading(false);
    } catch (error) {
      return setServerMsg(error?.response.data.msg);
    }
  };
  const getWomenProducts = async (limit) => {
    try {
      setLoading(true);
      const res = await getAPI(`/product?gender=Women&limit=${limit * 9}`);
      setWomenProducts(res.data.products);
      setLoading(false);
    } catch (error) {
      return setServerMsg(error?.response.data.msg);
    }
  };
  const getMenProducts = async (limit) => {
    try {
      setLoading(true);
      const res = await getAPI(`/product?gender=Men&limit=${limit * 9}`);
      setMenProducts(res.data.products);
      setLoading(false);
    } catch (error) {
      return setServerMsg(error?.response.data.msg);
    }
  };
  const getProductDetail = async (id) => {
    try {
      setLoading(true);
      const res = await getAPI(`/product/${id}`);
      setProDetail(res.data.product);
      setLoading(false);
    } catch (error) {
      console.log(error);
      return setServerMsg(error?.response.data.msg);
    }
  };
  return { allProducts, getAllProducts, getMenProducts, getWomenProducts, getProductDetail };
};
