import { Target } from "../../components/detail/target";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";

export const HomeAnimation = () => {
  return (
    <Controller>
      <Scene
        duration={2000}
        indicators={true}
        triggerElement={"#animation"}
        triggerHook={0.5}
        pin={true}
      >
        {(progress) => (
          <Timeline totalProgress={progress} paused target={<Target />}>
            <Tween
              from={{
                position: "absolute",
                top: "30",
                left: "0%",
              }}
              to={{
                position: "absolute",
                left: "-30%",
                top: "30",
              }}
              target="div1"
              position="0"
              duration={1}
            />
            <Tween
              from={{
                position: "absolute",
                left: "20%",
                top: "80",
              }}
              to={{
                position: "absolute",
                left: "-30%",
                top: "80",
                // transform: `scale(1.5)`,
              }}
              target="div2"
              position="0"
              duration={1}
            />
            <Tween
              from={{
                position: "absolute",
                left: "41.5%",
                top: "30",
              }}
              to={{
                position: "absolute",
                left: "0%",
                top: "800",
                // transform: `scale(7)`,
                // opacity: "0",
                width: "100%",
                // heigth: "700px",
              }}
              target="div3"
              position="0"
              duration={1}
            />
            <Tween
              from={{
                position: "absolute",
                right: "20%",
                top: "0",
              }}
              to={{
                position: "absolute",
                right: "-30%",
                top: "0",
              }}
              target="div4"
              position="0"
              duration={1}
            />
            <Tween
              from={{
                position: "absolute",
                right: "0%",
                top: "80",
              }}
              to={{
                position: "absolute",
                right: "-30%",
                top: "80",
                // transform: `scale(1.5)`,
              }}
              target="div5"
              position="0"
              duration={1}
            />
            <Tween
              from={{
                width: "315px",
                minHeight: "600px",
                height: "100% ",
              }}
              to={{
                width: "100%",

                // backgroundPosition: "50% 20%",
                maxHeight: "1700px",
                height:"100%",
                // transform: "translateY(50%)",
              }}
              target="div6"
              position="0"
              duration={1}
            />
            <Tween
              from={{
                position: "absolute",
                right: "0%",
                top: "2000",
              }}
              to={{
                position: "absolute",
                right: "0%",
                top: "2000",
                // transform: `scale(1.5)`,
              }}
              target="div7"
              position="0"
              duration={1}
            />
          </Timeline>
        )}
      </Scene>
    </Controller>
  );
};
