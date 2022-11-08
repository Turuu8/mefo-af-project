import { useContext } from "react";
import { Login, Signup } from "../../pages";
import { GlobalContext } from "../../context/GlobalContext";
import classes from "../../assets/styles/home.module.scss"
import { Target } from "../../components/detail/target";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
export const Home = () => {
  const { isLoginOpen, isSignupOpen } = useContext(GlobalContext);
  return (
    <>
      <div className={classes.home}>
      <Controller className={classes.home.target}>
      <Scene duration={2000} pin={true} indicators={true} triggerHook={0.1} className={classes.home.target}>
        {(progress) => (
          <div className={classes.home.target}>
            {/* <Timeline totalProgress={progress} paused target={<Target />}>
              <Tween
                from={{ y: "10vh" }}
                to={{ y: "100vh" }}
                target="div1"
                position="0"
                duration={1}
              />
              <Tween
                from={{ position: "absolute", left: "20%" }}
                to={{ position: "absolute", left: "100%" }}
                target="div2"
                position="0.1"
                duration={0.5}
              />
            </Timeline> */}
          </div>
        )}
      </Scene>
    </Controller>
      </div>
      {isLoginOpen && <Login />}
      {isSignupOpen && <Signup />}
    </>
  );
};
