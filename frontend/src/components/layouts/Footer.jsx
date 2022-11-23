import { Link } from "react-router-dom";
import { footerArr } from "../../utils/constants";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import classes from "../../assets/styles/footer.module.scss";

export const Footer = () => {
  return (
    <div className={classes.footer}>
      {Object.entries(footerArr).map(([name, arr]) => (
        <div key={name} className={classes.footer_item}>
          <div className={classes.footer_item_inner}>
            <h4>{name}</h4>
            <div>
              {arr.map((el, i) => (
                <Link key={i} to={el.path}>
                  {el.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className={classes.footer_item}>
        <div className={classes.footer_item_inner}>
          <h4>SOCIAL LINKS</h4>
          <span>
            <a href="www.instagram.com">
              <BsInstagram size={22} />
            </a>
            <a href="www.facebook.com">
              <BsFacebook size={22} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
