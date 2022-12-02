import { Timeline, Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { TargetItems } from "./home-animation-supports";

export const HomeScrollAnimation = () => {
  return (
    <Controller>
      <Scene
        duration={1000}
        // indicators={true}
        triggerElement={"#animation"}
        triggerHook={0.15}
        // pin={("#animation", { pushFollowers: false })}
      >
        {(progress) => (
          <Timeline totalProgress={progress} paused target={<TargetItems />}>
            <Tween
              to={{
                y: "5vh",
                x: "-60vw",
                scrollTrigger: {
                  trigger: "#img",
                  start: "0 25%",
                  end: "100% center",
                  scrub: 1,
                },
              }}
              target="img1"
              position="0"
              duration={0.5}
            />
            <Tween
              to={{
                y: "5vh",
                x: "-60vw",
                scrollTrigger: {
                  trigger: "#img",
                  start: "0 25%",
                  end: "100% center",
                  scrub: 1,
                },
              }}
              target="img2"
              position="0"
              duration={0.5}
            />
            <Tween
              to={{
                y: "5vh",
                x: "60vw",
                scrollTrigger: {
                  trigger: "#img",
                  start: "0 25%",
                  end: "100% center",
                  scrub: 1,
                },
              }}
              target="img4"
              position="0"
            />
            <Tween
              to={{
                y: "5vh",
                x: "60vw",
                scrollTrigger: {
                  trigger: "#img",
                  start: "0 25%",
                  end: "100% center",
                  scrub: 1,
                },
              }}
              target="img5"
              position="0"
            />
            {/*  scrolling big image  */}
            <Tween
              from={{
                top: "10%",
              }}
              to={{
                height: "190vh",
                width: "100vw",
                top: "60vh",
                objectPosition: "50% -70%",
                scrollTrigger: {
                  trigger: "#mainImg",
                  start: "0 21%",
                  end: "100% center",
                  scrub: 1,
                },
              }}
              target="img3"
              position="0"
              duration={1}
            />
            {/* shadow */}
            <Tween
              to={{
                top: "90vh",
                width: "100vw",
                right: "0",
                display: "flex",
                height: "800px",
                scrollTrigger: {
                  trigger: "#shadow",
                  start: "-100% bottom",
                  end: "140% center",
                  duration: "0.1s",
                },
              }}
              target="shadow"
              duration={0}
            />
          </Timeline>
        )}
      </Scene>
    </Controller>
  );
};
