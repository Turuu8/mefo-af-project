import { useParams } from "react-router-dom";
import { useProduct } from "../../../API/useProduct";
import { useEffect, useContext, useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import classes from "../../../assets/styles/detail.module.scss";
import { GlobalContext } from "./../../../context/GlobalContext";
import { ProductDeskImgs, ProductMobileImgs, RelatedProducts, BagWarning } from "../../../components/";

const Detail = () => {
  const { id } = useParams();
  const [related, setRelated] = useState([]);
  const { getProductDetail } = useProduct();
  const {
    token: { token },
    size: { size, setSize },
    detail: { proDetail },
    allPro: { allProducts },
    onBag: { setOnBagOpen },
    loginOpen: { setIsLoginOpen },
    qty: { amount, setAmount },
    selectedProducts: { selectedPros, setSelectedPros },
  } = useContext(GlobalContext);
  useEffect(() => {
    (() => {
      setRelated(
        allProducts
          .filter((item) => item.gender === proDetail.gender && item._id !== proDetail._id)
          .sort(() => Math.random() - Math.random())
          .slice(0, 3)
      );
    })();
    setSize(proDetail.sizes?.[0]);
    setAmount(1);
  }, [proDetail, allProducts, setSize, setAmount]);
  useEffect(() => {
    getProductDetail(id);
    // eslint-disable-next-line
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) return setIsLoginOpen(true);
    setSelectedPros([...selectedPros, { proDetail, size, amount }]);
    setOnBagOpen(true);
  };

  return (
    <div className={classes.detailContainer}>
      <div className={classes.detailContainer_box}>
        <div className={classes.detailContainer_box_detail}>
          <ProductDeskImgs images={proDetail.images} />
          <ProductMobileImgs images={proDetail.images} />
          <div className={classes.detailInformation}>
            <h2 className={classes.title}>{proDetail.title}</h2>
            <h2 className={classes.name}>{proDetail.name}</h2>
            <h4 className={classes.price}>USD {new Intl.NumberFormat("en-In").format(proDetail.price)}</h4>
            <form onSubmit={handleSubmit}>
              <div className={classes.formBox}>
                <div className={classes.formSize}>
                  <label>Size</label>
                  <select onChange={(e) => setSize(e.target.value)} value={size} name="size">
                    {proDetail.sizes?.map((item, id) => (
                      <option key={id} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={classes.formQTY}>
                  <label>QTY</label>
                  <div className={classes.quantity}>
                    <input onChange={(e) => setAmount(e.target.value)} type="text" value={amount} />
                    <div className={classes.arrows}>
                      <BsChevronUp size={10} onClick={() => setAmount((pre) => ++pre)} />
                      <BsChevronDown style={{ display: amount === 1 ? "none" : "block" }} size={10} onClick={() => setAmount((pre) => --pre)} />
                    </div>
                  </div>
                </div>
              </div>
              <button className={classes.addButton}>Add to bag</button>
            </form>
            <p className={classes.description}>{proDetail.description}</p>
            <input type="checkbox" className={classes.readMore} />
            <div className={classes.artist}>
              <div className={classes.artistImg}>
                <img src={proDetail.artist?.image[0].url} alt="" />
              </div>
              <h4 className={classes.artistName}>Designed by : {proDetail.artist?.name}</h4>
            </div>
          </div>
        </div>
        <RelatedProducts products={related} />
      </div>
    </div>
  );
};

export default Detail;
