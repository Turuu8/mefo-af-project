import { ProductCart } from "../product/ProductCart";
import classes from "../../assets/styles/product.module.scss";

export const RelatedProducts = ({ products }) => {
  return (
    <div className={classes.relatedProducts}>
      <h3>RelatedProducts</h3>
      <div className={classes.relatedProductBox}>
        {products?.map((item) => (
          <ProductCart key={item._id} type={"related"} item={item} />
        ))}
      </div>
    </div>
  );
};
