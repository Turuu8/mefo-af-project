import { Fragment, useContext } from "react";
import { Login, Signup, ForgotPassword } from "../../pages";
import { GlobalContext } from "../../context/GlobalContext";
import classes from "../../assets/styles/home.module.scss";



import { HomeAnimation } from "./home-animation";
export const Home = () => {
  const {
    loginOpen: { isLoginOpen },
    signupOpen: { isSignupOpen },
    forPassOpen: { isForPassOpen },
  } = useContext(GlobalContext);


  return (
    <>
      <div className={classes.home}>
        <div className={classes.home_text1}>
          A New Look at Fashion of the MEPO AF
        </div>
        <div className={classes.home_text2}>
          EXCLUSIVE COLLECTIONS OF POPULAR BRANDS ABOUT HUMAN CULTURE
        </div>
        <div className={classes.home_img}></div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          ------
        </div>
        <div className={classes.home_text2}> Our new collection</div>
        <div
        className= {classes.home_scroll}

        >

          <HomeAnimation/>
        </div>
      </div>
      {isLoginOpen && <Login />}
      {isSignupOpen && <Signup />}
      {isForPassOpen && <ForgotPassword />}
    </>
  );
};
