import classes from "../../assets/styles/home.module.scss";
import { specialImges } from "../../utils/constants";

export const DiffencedScroll = () => {
  return (
    <div className={classes.home_diff_scroll}>
      <div className={classes.home_diff_scroll_container}>
        {/* {specialImges.map((el, i) => (
          <div key={i}>
            <img src={el.url} alt="" />
          </div>
        ))} */}
        <div className={classes.home_diff_scroll_container_fitst_column}>
          <div>
            <img src={specialImges[0].url} alt="" />
          </div>
          <div>
            <img src={specialImges[1].url} alt="" />
          </div>
        </div>
        <div className={classes.home_diff_scroll_container_second_column}>
          <div>
            <img src={specialImges[2].url} alt="" />
          </div>
          <div>
            <img src={specialImges[3].url} alt="" />
          </div>
          <div>
            <img src={specialImges[4].url} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
