import { useContext } from "react";
import { Login, Signup, ForgotPassword } from "../../pages";
import { GlobalContext } from "../../context/GlobalContext";
import classes from "../../assets/styles/home.module.scss";

import { Target } from "../../components/detail/target";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
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
          {" "}
          A New Look at Fashion of the MEPO AF
        </div>
        <div className={classes.home_text2}>
          {" "}
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
          ---
        </div>
        <div className={classes.home_text2}> Our collections</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "30px",
            position: "relative",
          }}
        >
          <div className="hello">
            <Controller>
              <Scene
                duration={2000}
                pin={".hello"}
                indicators={true}
                triggerHook={2}
              >
                {(progress) => (
                  <Timeline totalProgress={progress} paused target={<Target />}>
                    <Tween
                      from={{
                        position: "absolute",
                        left: "0%",
                        top: "0",
                      }}
                      to={{
                        position: "absolute",
                        left: "38.5%",
                        top: "0",
                        transform: `scale(1.5)`,
                      }}
                      target="div1"
                      position="0"
                      duration={1}
                    />
                    {/* <Tween
                      from={{
                        position: "absolute",
                        right: "20%",
                        top: "3020px",
                      }}
                      to={{
                        position: "absolute",
                        right: "54%",
                        top: "3235px",
                        transform: `scale(1.5)`,
                      }}
                      target="div2"
                      position="0"
                      duration={1}
                    />
                    <Tween
                      from={{
                        position: "absolute",
                        right: "20%",
                        top: "3400px",
                      }}
                      to={{
                        position: "absolute",
                        right: "54%",
                        top: "3553px",
                        transform: `scale(1.5)`,
                      }}
                      target="div3"
                      position="0"
                      duration={1}
                    />
                    <Tween
                      from={{
                        position: "absolute",
                        left: "20%",
                        top: "3400px",
                      }}
                      to={{
                        position: "absolute",
                        left: "38.5%",
                        top: "3553px",
                        transform: `scale(1.5)`,
                      }}
                      target="div4"
                      position="0"
                      duration={1}
                    /> */}
                  </Timeline>
                )}
              </Scene>
            </Controller>
          </div>
        </div>
      </div>
      {isLoginOpen && <Login />}
      {isSignupOpen && <Signup />}
      {isForPassOpen && <ForgotPassword />}
    </>
  );
};
