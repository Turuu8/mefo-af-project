import { useContext } from "react";
import { Login, Signup } from "../../pages";
import { GlobalContext } from "../../context/GlobalContext";
import classes from "../../assets/styles/home.module.scss";
import { Target } from "../../components/detail/target";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
export const Home = () => {
  console.log(classes.home);
  const { isLoginOpen, isSignupOpen } = useContext(GlobalContext);
  return (
    <>
      <div className={classes.home}>
        <Controller>
          <Scene duration={2000} pin={true} indicators={true} triggerHook={0.1}>
            {(progress) => (
              <Timeline totalProgress={progress} paused target={<Target />}>
                <Tween
                  from={{
                    position: "absolute",
                    left: "20%",
                    top: "20px",
                  }}
                  to={{
                    position: "absolute",
                    left: "38.5%",
                    top: "235px",
                    transform: `scale(4)`,
                  }}
                  target="div1"
                  position="0"
                  duration={1}
                />
                <Tween
                  from={{ position: "absolute", right: "20%", top: "20px" }}
                  to={{
                    position: "absolute",
                    right: "54%",
                    top: "235px",
                    transform: `scale(4)`,
                  }}
                  target="div2"
                  position="0"
                  duration={1}
                />
                <Tween
                  from={{ position: "absolute", right: "20%", top: "400px" }}
                  to={{
                    position: "absolute",
                    right: "54%",
                    top: "553px",
                    transform: `scale(4)`,
                  }}
                  target="div3"
                  position="0"
                  duration={1}
                />
                <Tween
                  from={{ position: "absolute", left: "20%", top: "400px" }}
                  to={{
                    position: "absolute",
                    left: "38.5%",
                    top: "553px",
                    transform: `scale(4)`,
                  }}
                  target="div4"
                  position="0"
                  duration={1}
                />
              </Timeline>
            )}
          </Scene>
        </Controller>
      </div>
      {isLoginOpen && <Login />}
      {isSignupOpen && <Signup />}
    </>
  );
};
