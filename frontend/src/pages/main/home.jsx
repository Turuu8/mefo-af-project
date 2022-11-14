import { useContext } from "react";
import { Login, Signup, ForgotPassword } from "../../pages";
import { GlobalContext } from "../../context/GlobalContext";
import classes from "../../assets/styles/home.module.scss";
// import { Target } from "../../components/detail/target";
// import { Controller, Scene } from "react-scrollmagic";
// import { Timeline, Tween } from "react-gsap";
export const Home = () => {
  const {
    loginOpen: { isLoginOpen },
    signupOpen: { isSignupOpen },
    forPassOpen: { isForPassOpen },
  } = useContext(GlobalContext);
  return (
    <>
      <div className={classes.home}>
        <div className={classes.home_text1}> A New Look at Fashion of the MEPO AF</div>
        <div className={classes.home_text2}> EXCLUSIVE COLLECTIONS OF POPULAR BRANDS ABOUT HUMAN CULTURE</div>
        {/* <div className={classes.home_text2}> BRANDS ABOUT HUMAN CULTURE</div> */}
      </div>
      {isLoginOpen && <Login />}
      {isSignupOpen && <Signup />}
      {isForPassOpen && <ForgotPassword />}
    </>
  );
};
