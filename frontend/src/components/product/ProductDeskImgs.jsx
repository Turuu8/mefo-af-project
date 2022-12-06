import classes from "../../assets/styles/detail.module.scss";

export const ProductDeskImgs = ({ images }) => {
  return (
    <div className={classes.detailImgs}>
      {images?.map((item, id) => (
        <div key={id} className={classes.detailImgs_item}>
          <img src={item.url} alt="clothes" />
        </div>
      ))}
    </div>
  );
};
