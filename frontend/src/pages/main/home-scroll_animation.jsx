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
        // pin={("#k", { pushFollowers: false })}
      >
        {(progress) => (
          <Timeline totalProgress={progress} paused target={<TargetItems />}>
            {/* <Tween
              to={{
                scrollTrigger: {
                  trigger: "#animation",
                  scrub: true,
                  pin: true,
                  markers: true,
                },
              }}
            /> */}
            <Tween
              to={{
                y: "5vh",
                x: "-60vw",
              }}
              target="img1"
              position="0"
            />
            <Tween
              to={{
                y: "5vh",
                x: "-50vw",
              }}
              target="img2"
              position="0"
            />
            <Tween
              to={{
                y: "5vh",
                x: "50vw",
              }}
              target="img4"
              position="0"
            />
            <Tween
              to={{
                y: "5vh",
                x: "60vw",
              }}
              target="img5"
              position="0"
            />
            {/*  scrolling big image  */}
            <Tween
              to={{
                height: "130vh",
                y: "60vh",
              }}
              target="img3"
              position="0"
              duration={0.9}
            />
            <Tween
              to={{
                width: "100vw",
              }}
              target="img3"
              position="0"
              duration={0.65}
            />
            <Tween
              to={{
                objectPosition: "50% 0",
              }}
              target="img3"
              position="0"
              duration={1.05}
            />
            <Tween
              to={{
                maxWidth: "100vw",
              }}
              target="container"
              position="0"
              duration={0.1}
            />
          </Timeline>
        )}
      </Scene>
    </Controller>
  );
};
