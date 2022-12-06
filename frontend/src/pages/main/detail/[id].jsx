import { useParams } from "react-router-dom";
import { useProduct } from "../../../API/useProduct";
import { useEffect, useContext, useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import classes from "../../../assets/styles/detail.module.scss";
import { GlobalContext } from "./../../../context/GlobalContext";
import { ProductDeskImgs, ProductMobileImgs, RelatedProducts } from "../../../components/";

const Detail = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const { getProductDetail } = useProduct();
  const {
    detail: { proDetail },
  } = useContext(GlobalContext);
  const [size, setSize] = useState("");
  useEffect(() => {
    setSize(proDetail.sizes?.[0]);
  }, [proDetail]);
  useEffect(() => {
    getProductDetail(id);
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className={classes.detailContainer}>
      <div className={classes.detailContainer_box}>
        <div className={classes.detailContainer_box_detail}>
          <ProductDeskImgs images={proDetail.images} />
          <ProductMobileImgs images={proDetail.images} />
          <div className={classes.detailInformation}>
            <h2 className={classes.title}>{proDetail.title}</h2>
            <h4 className={classes.price}>USD {new Intl.NumberFormat("en-In").format(proDetail.price)}</h4>
            <form>
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
                    <input onChange={(e) => setQty(e.target.value)} type="text" value={qty} />
                    <div className={classes.arrows}>
                      <BsChevronUp size={10} onClick={() => setQty((pre) => ++pre)} />
                      <BsChevronDown style={{ display: qty === 1 ? "none" : "block" }} size={10} onClick={() => setQty((pre) => --pre)} />
                    </div>
                  </div>
                </div>
              </div>
              <button className={classes.addButton}>Add to bag</button>
            </form>
            <p className={classes.description}>{proDetail.description}</p>
            <button className={classes.readMore}>Read more</button>
            <div className={classes.artist}>
              <div className={classes.artistImg}>
                <img src={proDetail.artist?.image[0].url} alt="" />
              </div>
              <h4 className={classes.artistName}>Designed by : {proDetail.artist?.name}</h4>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default Detail;
