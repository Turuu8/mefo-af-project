import { Timeline, Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { TargetItems } from "./home-animation-supports";

export const HomeScrollAnimation = ({ resize }) => {
  return (
    <Controller>
      <Scene duration={2000} triggerElement={"#animation"} triggerHook={0.2}>
        {(progress) => (
          <Timeline totalProgress={progress} paused target={<TargetItems />}>
            <>
              <Tween
                to={{
                  width: "100vw",
                  maxHeight: "none",
                  maxWidth: "none",
                  height: resize < 900 ? "900px" : "100%",
                  marginBottom: "none",
                  scrollTrigger: {
                    trigger: "#animation",
                    start:
                      resize > 3800
                        ? "0 65%"
                        : resize < 1700
                        ? resize < 1300
                          ? "0 35%"
                          : "0 15%"
                        : "0 30%",
                    end: resize < 1100 ? (resize < 833 ? "100% center" : "80% top") : "100% top",
                    scrub: 1.5,
                  },
                }}
                target="mainimg"
                duration={10}
              />
              <Tween
                to={{
                  y:
                    resize > 3800 ? "0" : resize < 1700 ? (resize < 833 ? "10vh" : "30vh") : "20vh",
                  scrollTrigger: {
                    trigger: "#animation",
                    start: "0 10%",
                    end: "100% top",
                    scrub: 1.5,
                  },
                }}
                target="mainimg"
                duration={10}
              />
              <Tween
                to={{
                  height: resize > 3800 ? "40vh" : "",
                  bottom: resize < 1700 ? "-30vh" : "-20vh",
                  scrollTrigger: {
                    trigger: "#animation",
                    start: resize < 833 ? "0 10%" : "70% 10%",
                    end: "75% 11%",
                    scrub: 1,
                  },
                }}
                target="shadow"
                position={resize < 1400 ? 0.5 : 0.8}
              />
            </>
          </Timeline>
        )}
      </Scene>
    </Controller>
  );
};
