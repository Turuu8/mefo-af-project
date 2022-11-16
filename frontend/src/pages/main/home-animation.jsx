
import { Target } from "../../components/detail/target";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import classes from "../../assets/styles/home.module.scss";
export const HomeAnimation = () => {

  return (
    <Controller>
      <Scene duration={3000} pin={true} indicators={true} triggerHook={2.5}>
        {(progress) => (
          <Timeline
            totalProgress={progress}
            paused target={<Target />}
          >
            <Tween
              from={{
                position: "absolute",
                top: "0",
                left: "5%",
              }}
              to={{
                position: "absolute",
                left: "-20%",
                top: "0",
              }}
              target="div1"
              position="0"
              duration={1}
            />
            <Tween
              from={{
                position: "absolute",
                left: "30%",
                top: "0",
              }}
              to={{
                position: "absolute",
                left: "-20%",
                top: "0",
                // transform: `scale(1.5)`,
              }}
              target="div2"
              position="0"
              duration={1}
            />
            <Tween
              from={{
                position: "absolute",
                left: "40%",
                top: "0",
              }}
              to={{
                position: "absolute",
                left: "40%",
                top: "700",
                transform: `scale(3)`,
                // width: "100%",
                // heigth: "100vh",
              }}
              target="div3"
              position="0"
              duration={1}
            />
            <Tween
              from={{
                position: "absolute",
                right: "40%",
                top: "0",
              }}
              to={{
               
                position: "absolute",
                right: "-20%",
                top: "0",
                // transform: `scale(1.5)`,
              }}
              target="div4"
              position="0"
              duration={1}
            />
            <Tween
              from={{
                position: "absolute",
                right: "5%",
                top: "0",
              }}
              to={{
                position: "absolute",
                right: "-20%",
                top: "0",
                // transform: `scale(1.5)`,
              }}
              target="div5"
              position="0"
              duration={1}
            />
          </Timeline>
        )}
      </Scene>
    </Controller>
  );
};
