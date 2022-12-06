import { Link } from "react-router-dom";
import classes from "../../assets/styles/product.module.scss";

export const ProductCart = ({ type, item }) => {
  return (
    <Link to={`/detail/${item?._id}`} className={classes.productCart}>
      <div className={classes.productCart_img}>
        {item.images?.map((el, id) => (
          <img key={id} src={el.url} alt="clothes" />
        ))}
      </div>
      <h2 className={classes.title}>{item.title}</h2>
      <h4 className={classes.price}>USD {item.price}</h4>
    </Link>
  );
};
