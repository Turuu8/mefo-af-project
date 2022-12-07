import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import classes from "../../assets/styles/product.module.scss";

export const ProductCart = ({ type, item }) => {
  const {
    detail: { setProDetail },
  } = useContext(GlobalContext);
  const clearDetail = () => {
    setProDetail({});
  };
  return (
    <>
      {type === "product" && (
        <Link onClick={clearDetail} to={`/detail/${item?._id}`} className={classes.productCart}>
          <div className={classes.productCart_img}>
            {item.images?.map((el, id) => (
              <img key={id} src={el.url} alt="clothes" />
            ))}
          </div>
          <h2 className={classes.title}>{item.name}</h2>
          <h4 className={classes.price}>USD {item.price}</h4>
        </Link>
      )}
      {type === "related" && (
        <Link onClick={clearDetail} to={`/detail/${item?._id}`} className={classes.relatedProductCart}>
          <div className={classes.relatedProductCart_img}>
            {item.images?.map((el, id) => (
              <img key={id} src={el.url} alt="clothes" />
            ))}
          </div>
          <h2 className={classes.relatedTitle}>{item.name}</h2>
          <h4 className={classes.relatedPrice}>USD {item.price}</h4>
        </Link>
      )}
    </>
  );
};
